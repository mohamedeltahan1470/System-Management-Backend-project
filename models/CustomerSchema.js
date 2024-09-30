 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  Phonenumber: String,
  age:Number,
  country:String,
  gender:String, 
  zip: Number,
  address: String
}, { timestamps: true });
 
const user = mongoose.model("Customer", userSchema);
 
module.exports = user;