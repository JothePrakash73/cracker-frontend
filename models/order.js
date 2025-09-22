// models/Order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: String,
  phone: String,
  place: String,
  landmark: String,
  billIndex: Number,
  billNumber: String,
  billPath: String,
  screenshotPath: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);

