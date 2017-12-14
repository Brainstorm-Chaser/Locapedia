const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String},
  googleId: { type: String, required: true},
  email: { type: String },
  saveitems: [{type: String}],
  date: { type: String }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
