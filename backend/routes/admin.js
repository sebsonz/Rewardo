import express from 'express';
import User from '../models/User.js';
import Offer from '../models/Offer.js';
const router = express.Router();

// naive admin reset - in prod add checks
router.delete('/reset', async (req,res)=>{
  await User.deleteMany({});
  await Offer.deleteMany({});
  res.json({message:'DB reset'});
});

export default router;
