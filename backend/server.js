import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import offerRoutes from './routes/offers.js';
import pointsRoutes from './routes/points.js';
import adminRoutes from './routes/admin.js';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/rewardo';

mongoose.connect(MONGO).then(()=>console.log('Mongo connected')).catch(err=>console.error(err));

app.get('/', (req,res)=>res.send('Rewardo MERN backend running'));

app.use('/api/auth', authRoutes);
app.use('/api/offers', offerRoutes);
app.use('/api/points', pointsRoutes);
app.use('/api/admin', adminRoutes);

app.listen(PORT, ()=>console.log('Server listening on', PORT));
