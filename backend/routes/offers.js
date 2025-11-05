import express from 'express';
import Offer from '../models/Offer.js';
import { fetchPartnerOffers } from '../services/partners.js';
import auth from '../middleware/auth.js';
const router = express.Router();

// get offers filtered by country (from query or token)
router.get('/', auth, async (req,res)=>{
  const loc = (req.query.location || req.user.country || 'FR').toUpperCase();
  const dbOffers = await Offer.find({location:loc, status:'active'}).lean();
  const partner = await fetchPartnerOffers();
  const partnerFiltered = partner.filter(p=>p.location===loc);
  res.json([...dbOffers, ...partnerFiltered]);
});

export default router;
