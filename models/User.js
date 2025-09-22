// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
  },
  place: { type: String, required: true },
  district: { type: String, required: true },
  password: { type: String, required: true }, // 🔑 Encrypted password
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
