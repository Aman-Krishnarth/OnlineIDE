const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: String,
  username: String,
  email: {
    type: String,
    unique: true,
    index: true
  },
  password: String,
  date: {
    type: Date,
    default: Date.now,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("user", userModel);
