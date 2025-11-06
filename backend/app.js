import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import pool from './config/db.js';
import authenticateToken from './middleware/auth.js';
import { fetchCpxOffers } from './partners/cpx.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Rewardo backend opérationnel'));

app.post('/api/register', async (req, res) => {
  const { email, password, country } = req.body;
  if(!email || !password) return res.status(400).json({ error: 'email+password required' });
  const hashed = await bcrypt.hash(password, 10);
  try {
    await pool.query('INSERT INTO users (email, password, country) VALUES ($1,$2,$3)', [email, hashed, country || 'FR']);
    res.json({ message: 'Utilisateur créé' });
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: 'Email déjà utilisé' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const r = await pool.query('SELECT * FROM users WHERE email=$1', [email]);
  if(r.rows.length===0) return res.status(400).json({ error: 'Utilisateur non trouvé' });
  const u = r.rows[0];
  const ok = await bcrypt.compare(password, u.password);
  if(!ok) return res.status(403).json({ error: 'Mot de passe incorrect' });
  const token = jwt.sign({ id: u.id, email: u.email, country: u.country, is_admin: u.is_admin }, process.env.JWT_SECRET || 'SuperSecretRewardoKey', { expiresIn: '7d'});
  res.json({ token });
});

app.get('/api/me', authenticateToken, async (req, res) => {
  const r = await pool.query('SELECT id,email,country,total_points,is_admin FROM users WHERE id=$1', [req.user.id]);
  res.json(r.rows[0]);
});

app.get('/api/offers', authenticateToken, async (req, res) => {
  const location = (req.query.location || req.user.country || 'FR').toUpperCase();
  try {
    const dbOffers = (await pool.query('SELECT id,title,description,reward_points AS reward_points,link,location,status FROM offers WHERE location=$1 AND status=$2', [location, 'active'])).rows;
    const partnerOffers = (await fetchCpxOffers(process.env.CPX_API_KEY || '')).filter(o => o.location === location);
    const combined = [...dbOffers, ...partnerOffers];
    res.json(combined);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.post('/api/claim/:offerId', authenticateToken, async (req, res) => {
  const offerId = req.params.offerId;
  try {
    let points = 0;
    let partner_id = null;
    const offer = (await pool.query('SELECT id,reward_points,partner_id FROM offers WHERE id=$1', [offerId])).rows[0];
    if(offer){
      points = offer.reward_points || 0;
      partner_id = offer.partner_id || null;
    } else {
      const partnerOffers = await fetchCpxOffers(process.env.CPX_API_KEY || '');
      const po = partnerOffers.find(o => String(o.id) === String(offerId));
      if(po) points = po.reward_points || 0;
      else return res.status(404).json({ error: 'Offre non trouvée' });
    }
    await pool.query('UPDATE users SET total_points = total_points + $1 WHERE id=$2', [points, req.user.id]);
    await pool.query('INSERT INTO completions (user_id, offer_id, partner_id, points_awarded, status) VALUES ($1,$2,$3,$4,$5)', [req.user.id, offerId, partner_id, points, 'completed']);
    res.json({ message: 'Points ajoutés', points });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.delete('/api/admin/reset', authenticateToken, async (req, res) => {
  if(!req.user.is_admin) return res.status(403).json({ error: 'Admin only' });
  try {
    await pool.query('DELETE FROM completions');
    await pool.query('DELETE FROM offers');
    await pool.query('DELETE FROM users');
    res.json({ message: 'DB reset' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Erreur reset' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Rewardo backend listening on', PORT));
