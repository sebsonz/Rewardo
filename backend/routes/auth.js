import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const router = express.Router();

// register
router.post('/register', async (req,res)=>{
  const {email,password,country} = req.body;
  if(!email||!password) return res.status(400).json({error:'email+password required'});
  const exists = await User.findOne({email});
  if(exists) return res.status(400).json({error:'Email already used'});
  const hash = await bcrypt.hash(password,10);
  const u = new User({email,password:hash,country});
  await u.save();
  res.json({message:'User created'});
});

// login
router.post('/login', async (req,res)=>{
  const {email,password} = req.body;
  const u = await User.findOne({email});
  if(!u) return res.status(400).json({error:'User not found'});
  const ok = await bcrypt.compare(password,u.password);
  if(!ok) return res.status(403).json({error:'Incorrect password'});
  const token = jwt.sign({id:u._id,email:u.email,country:u.country,isAdmin:u.isAdmin}, process.env.JWT_SECRET || 'secret', {expiresIn:'7d'});
  res.json({token});
});

// me (protected) - simple implementation
import auth from '../middleware/auth.js';
router.get('/me', auth, async (req,res)=>{
  const u = await User.findById(req.user.id).select('email country points isAdmin');
  res.json(u);
});

export default router;
