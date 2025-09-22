// // routes/order.js
// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');

// // Order Schema
// const orderSchema = new mongoose.Schema({
//   customerName: String,
//   phone: String,
//   address: String,
//   orderItems: Array,
//   total: Number,
//   orderDate: { type: Date, default: Date.now }
// });

// const Order = mongoose.model('Order', orderSchema);

// // POST /api/orders
// router.post('/', async (req, res) => {
//   try {
//     const newOrder = new Order(req.body);
//     await newOrder.save();
//     res.status(201).json({ message: 'Order placed successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Error placing order' });
//   }
// });

// module.exports = router;
// models/Product.js
// models/Product.js
// models/product.js
// models/Product.js
// const mongoose = require('mongoose');

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Product", productSchema);
