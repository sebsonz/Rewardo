<<<<<<< HEAD
﻿import jwt from 'jsonwebtoken';
export default function auth(req,res,next){
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if(!token) return res.status(401).json({error:'No token'});
  jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, user)=>{
    if(err) return res.status(403).json({error:'Invalid token'});
=======
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export default function authenticateToken(req, res, next){
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if(!token) return res.status(401).json({error:'Token manquant'});
  jwt.verify(token, process.env.JWT_SECRET || 'SuperSecretRewardoKey', (err, user) => {
    if(err) return res.status(403).json({error:'Token invalide'});
>>>>>>> 0d33c1699a3a7ac44d0e1f8f9fe46b20ccb8501d
    req.user = user;
    next();
  });
}
