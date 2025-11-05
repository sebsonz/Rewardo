import mongoose from 'mongoose';
const CompletionSchema = new mongoose.Schema({
  userId:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
  offerId:String,
  partner:String,
  pointsAwarded:Number,
  status:String,
  createdAt:{type:Date,default:Date.now}
});
export default mongoose.model('Completion', CompletionSchema);
