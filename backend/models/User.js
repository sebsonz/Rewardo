import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
  email:{type:String,unique:true,required:true},
  password:{type:String,required:true},
  country:{type:String,default:'FR'},
  isAdmin:{type:Boolean,default:false},
  points:{type:Number,default:0},
  createdAt:{type:Date,default:Date.now}
});
export default mongoose.model('User', UserSchema);
