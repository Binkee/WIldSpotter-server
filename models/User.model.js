const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  passwordHash:{
    type: String,
    required: true
  },
  image: String,
  bio: String,
  country: String

});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
