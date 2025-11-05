import express from 'express';
import auth from '../middleware/auth.js';
import User from '../models/User.js';
import Completion from '../models/Completion.js';
const router = express.Router();

router.post('/add', auth, async (req,res)=>{
  const {points, reason, offerId} = req.body;
  if(!points || isNaN(points)) return res.status(400).json({error:'Invalid points'});
  const user = await User.findById(req.user.id);
  if(!user) return res.status(404).json({error:'User not found'});
  user.points += Number(points);
  await user.save();
  const c = new Completion({userId:user._id, offerId: offerId || 'manual', partner:'manual', pointsAwarded:points, status:'completed'});
  await c.save();
  res.json({message:'Points added', total:user.points});
});

router.get('/', auth, async (req,res)=>{
  const user = await User.findById(req.user.id).select('points email country');
  res.json({points:user.points, email:user.email, country:user.country});
});

export default router;
