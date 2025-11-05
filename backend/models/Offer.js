import mongoose from 'mongoose';
const OfferSchema = new mongoose.Schema({
  _id:String,
  title:String,
  description:String,
  rewardPoints:Number,
  link:String,
  location:String,
  partner:String,
  status:{type:String,default:'active'},
  createdAt:{type:Date,default:Date.now}
});
export default mongoose.model('Offer', OfferSchema);
