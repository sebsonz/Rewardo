import jwt from 'jsonwebtoken';
export default function auth(req,res,next){
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if(!token) return res.status(401).json({error:'No token'});
  jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, user)=>{
    if(err) return res.status(403).json({error:'Invalid token'});
    req.user = user;
    next();
  });
}
