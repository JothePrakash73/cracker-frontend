// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const Product = require('./models/Product');

// const app = express();
// const PORT = 5000;

// // 🔌 Middleware
// app.use(cors());
// app.use(express.json());

// // ✅ MongoDB Connection
// mongoose.connect('mongodb://127.0.0.1:27017/crackerShop')
//   .then(() => console.log('✅ Connected to MongoDB'))
//   .catch((err) => console.error('❌ MongoDB connection error:', err));

// // Real products list (with real image names and categories)
// const products = [
//   {
    // _id: "1",
//     name: "30cm Green Sparkler",
//     price: 130,
//     category: "30 cm Sparklers",
//     image: "/images/30cmGreen.jpg",
//   },
//   {
    // _id: "2",
//     name: "30cm Red Sparkler",
//     price: 150,
//     category: "30 cm Sparklers",
//     image: "/images/30cmRed.jpg",
//   },
//   {
    // _id: "3",
//     name: "30cm Electric Sparkler",
//     price: 110,
//     category: "30 cm Sparklers",
//     image: "/images/30cmElectric.jpg",
//   },
//   {
    // _id: "4",
//     name: "30cm Color Sparkler",
//     price: 120,
//     category: "30 cm Sparklers",
//     image: "/images/30cmColor.jpg",
//   },
//    {
    // _id: "5",
//     name: "15cm Red Sparkler",
//     price: 150,
//     category: "15 cm Sparklers",
//     image: "/images/15cmRed.jpg",
//   },
//    {
    // _id: "6",
//     name: "15cm Electric Sparkler",
//     price: 110,
//     category: "15 cm Sparklers",
//     image: "/images/15cmElectric.jpg",
//   },
//    {
    // _id: "7",
//     name: "15cm Green Sparkler",
//     price: 130,
//     category: "15 cm Sparklers",
//     image: "/images/15cmGreen.jpg",
//   },
//    {
    // _id: "8",
//     name: "15cm Color Sparkler",
//     price: 120,
//     category: "15 cm Sparklers",
//     image: "/images/15cmColor.jpg",
//   },
//     {
    // _id: "9",
//     name: "12cm Golden Sparkler",
//     price: 100,
//     category: "12 cm Sparklers",
//     image: "/images/12cmGolden.jpg",
//   },
//     {
//     _id: "10",
//     name: "12cm Red Sparkler",
//     price: 130,
//     category: "12 cm Sparklers",
//     image: "/images/12cmRed.jpg",
//   },
//     {
//     _id: "11",
//     name: "10cm Color Sparkler",
//     price: 60,
//     category: "10 cm Sparklers",
//     image: "/images/10cmColor.jpg",
//   },
//     {
//     _id: "12",
//     name: "10cm Electric Sparkler",
//     price: 55,
//     category: "10 cm Sparklers",
//     image: "/images/10cmElectric.jpg",
//   },
//     {
//     _id: "13",
//     name: "10cm Green Sparkler",
//     price: 65,
//     category: "10 cm Sparklers",
//     image: "/images/10cmGreen.jpg",
//   },
//    {
//     _id: "14",
//     name: "50cm Electric Sparkler",
//     price: 400,
//     category: "50 cm Sparklers",
//     image: "/images/50cmElectric.jpg",
//   },
//    {
//     _id: "15",
//     name: "7cm Electric Sparkler",
//     price: 25,
//     category: "7 cm Sparklers",
//     image: "/images/7cmElectric.jpg",
//   },
//    {
//     _id: "16",
//     name: "7cm Color Sparkler",
//     price: 30,
//     category: "7 cm Sparklers",
//     image: "/images/7cmColor.jpg",
//   },
  
//    {
//     _id: "17",
//     name: "Flower Pots Small",
//     price: 95,
//     category: "Flower Pots",
//     image: "/images/FlowerPotsSmall.jpg",
//   },
//    {
//     _id: "18",
//     name: "Flower Pots Big",
//     price: 130,
//     category: "Flower Pots",
//     image: "/images/FlowerPotsBig.jpg",
//   },
//    {
//     _id: "19",
//     name: "Flower Pots Special",
//     price: 170,
//     category: "Flower Pots",
//     image: "/images/FlowerPotsSpecial.jpg",
//   },
//    {
//     _id: "20",
//     name: "Flower Pots Ashoka",
//     price: 250,
//     category: "Flower Pots",
//     image: "/images/FlowerPotsAsoka.jpg",
//   },
//    {
//     _id: "21",
//     name: "Flower Pot Giant",
//     price: 510,
//     category: "Flower Pots",
//     image: "/images/FlowerPotsGiant.jpg",
//   },
//    {
//     _id: "22",
//     name: "Flower Pots Super Deluxe(5 Pcs)",
//     price: 340,
//     category: "Flower Pots",
//     image: "/images/FlowerPotsSuperDeluxe.jpg",
//   },
//    {
//     _id: "23",
//     name: "Colour Blooming",
  
//     price: 660,
//     category: "Flower Pots",
//     image: "/images/ColorBloomy.jpg",
//   },
//    {
//     _id: "24",
//     name: "Green Koti(5 Pcs)",
//     price: 280,
//     category: "Flower Pots",
//     image: "/images/GreenKoti.jpg",
//   },
//    {
//     _id: "25",
//     name: "Green Bouquet",
//     price: 480,
//     category: "Flower Pots",
//     image: "/images/GreenBouquet.jpg",
//   },
//   {
//     _id: "26",
//     name: "Tri Color(5 Pcs)",
//     price: 625,
//     category: "Flower Pots",
//     image: "/images/TriColor.jpg",
//   },
//    {
//     _id: "27",
//     name: "Ground Chakkar Big(10 Pcs)",
//     price: 70,
//     category: "Chakkars",
//     image: "/images/GroundChakkar.jpg",
//   },
//    {
//     _id: "28",
//     name: "Ground Chakkar Big(25 Pcs)",
//     price: 165,
//     category: "Chakkars",
//     image: "/images/GroundChakkarBig25.jpg",
//   },
//    {
//     _id: "29",
//     name: "Ground Chakkar Deluxe",
//     price: 260,
//     category: "Chakkars",
//     image: "/images/GroundChakkarDeluxe.jpg",
//   },
//    {
//     _id: "30",
//     name: "Ground Chakkar Special",
//     price: 145,
//     category: "Chakkars",
//     image: "/images/GroundChakkarSpecial.jpg",
//   },
//    {
//     _id: "31",
//     name: "Chakkar Spinner Special",
//     price: 240,
//     category: "Chakkars",
//     image: "/images/ChakkarSpinnerSpecial.jpg",
//   },
//    {
//     _id: "32",
//     name: "Flora Wheel(5 Pcs)",
//     price: 270,
//     category: "Chakkars",
//     image: "/images/FloraWheel.jpg",
//   },
//      {
//     _id: "33",
//     name: "4X4 Wheel",
//     price: 330,
//     category: "Chakkars",
//     image: "/images/4X4Wheel.jpg",
//   },
//      {
//     _id: "34",
//     name: "Dancing Wheel",
//     price: 190,
//     category: "Chakkars",
//     image: "/images/DancingWheel.jpg",
//   },
//        {
//     _id: "35",
//     name: "Baby Rockets",
//     price: 100,
//     category: "Rockets",
//     image: "/images/BabyRocket.jpg",
//   },
//        {
//     _id: "36",
//     name: "Rocket Bomb",
//     price: 130,
//     category: "Rockets",
//     image: "/images/RocketBomb.jpg",
//   },
//        {
//     _id: "37",
//     name: "Lunik Rocket",
//     price: 230,
//     category: "Rockets",
//     image: "/images/LunikRocket.jpg",
//   },
//          {
//     _id: "38",
//     name: "Zig Zag",
//     price: 60,
//     category: "Fancy Novelties",
//     image: "/images/ZigZag.jpg",
//   },
//          {
//     _id: "39",
//     name: "Stunner",
//     price: 260,
//     category: "Fancy Novelties",
//     image: "/images/Stunner.jpg",
//   },
//            {
//     _id: "40",
//     name: "Photo Flash",
//     price: 210,
//     category: "Fancy Novelties",
//     image: "/images/PhotoFlash.jpg",
//   },
//            {
//     _id: "41",
//     name: "Musical Siren",
//     price: 425,
//     category: "Fancy Novelties",
//     image: "/images/MusicalSiren.jpg",
//   },
//            {
//     _id: "42",
//     name: "Mini Siren",
//     price: 350,
//     category: "Fancy Novelties",
//     image: "/images/MiniSiren.jpg",
//   },
//            {
//     _id: "43",
//     name: "Magic Stone",
//     price: 45,
//     category: "Fancy Novelties",
//     image: "/images/MagicStone.jpg",
//   },
//            {
//     _id: "44",
//     name: "Magic Star",
//     price: 50,
//     category: "Fancy Novelties",
//     image: "/images/MagicStar.jpg",
//   },
//            {
//     _id: "45",
//     name: "Assorted Cartoons(10 Pcs)",
//     price: 70,
//     category: "Fancy Novelties",
//     image: "/images/AssortedCartoons.jpg",
//   },
//            {
//     _id: "46",
//     name: "Bambaram",
//     price: 180,
//     category: "Fancy Novelties",
//     image: "/images/Bambaram.jpg",
//   },
//            {
//     _id: "47",
//     name: "Bimboo(20 Pcs)",
//     price: 345,
//     category: "Fancy Novelties",
//     image: "/images/Bimboo.jpg",
//   },
//            {
//     _id: "48",
//     name: "ButterFly",
//     price: 230,
//     category: "Fancy Novelties",
//     image: "/images/Butterfly.jpg",
//   },
//            {
//     _id: "49",
//     name: "Doobys(20 Pcs)",
//     price: 345,
//     category: "Fancy Novelties",
//     image: "/images/Doobys.jpg",
//   },
//            {
//     _id: "50",
//     name: "Ganga Jamuna(5 Pcs)",
//     price: 150,
//     category: "Fancy Novelties",
//     image: "/images/GangaJamuna.jpg",
//   },
//            {
//     _id: "51",
//     name: "Helicopter(5 Pcs)",
//     price: 250,
//     category: "Fancy Novelties",
//     image: "/images/Helicopter.jpg",
//   },
//              {
//     _id: "52",
//     name: "Peacock Meena",
//     price: 490,
//     category: "Fountains",
//     image: "/images/PeacockMeena.jpg",
//   },
//              {
//     _id: "53",
//     name: "Bada Peacock",
//     price: 960,
//     category: "Fountains",
//     image: "/images/BadaPeacock.jpg",
//   },
//              {
//     _id: "54",
//     name: "Holi",
//     price: 300,
//     category: "Fountains",
//     image: "/images/Holi.jpg",
//   },
//              {
//     _id: "55",
//     name: "Gold Rush",
//     price: 260,
//     category: "Fountains",
//     image: "/images/GoldRush.jpg",
//   },
//              {
//     _id: "56",
//     name: "Kinder Joy",
//     price: 260,
//     category: "Fountains",
//     image: "/images/KinderJoy.jpg",
//   },
//              {
//     _id: "57",
//     name: "Popcorn",
//     price: 500,
//     category: "Fountains",
//     image: "/images/Popcorn.jpg",
//   },
//              {
//     _id: "58",
//     name: "Lollipop",
//     price: 525,
//     category: "Fountains",
//     image: "/images/Lollopop.jpg",
//   },
//              {
//     _id: "59",
//     name: "PUBG Gun",
//     price: 400,
//     category: "Fountains",
//     image: "/images/PubgGun.jpg",
//   },
//                {
//     _id: "60",
//     name: "Wonder Bees",
//     price: 630,
//     category: "Mega Fountains",
//     image: "/images/WonderBees.jpg",
//   },
//                {
//     _id: "61",
//     name: "Silver Bees",
//     price: 630,
//     category: "Mega Fountains",
//     image: "/images/SilverBees.jpg",
//   },
//                {
//     _id: "62",
//     name: "Blooming Volcano",
//     price: 730,
//     category: "Mega Fountains",
//     image: "/images/BloomingVolcano.jpg",
//   },
//                {
//     _id: "63",
//     name: "Sizzle Pots",
//     price: 400,
//     category: "Mega Fountains",
//     image: "/images/SizzlePots.jpg",
//   },
//                {
//     _id: "64",
//     name: "Golden & Silver Stars(2 Pcs)",
//     price: 425,
//     category: "Mega Fountains",
//     image: "/images/SilverStar.jpg",
//   },
//                {
//     _id: "65",
//     name: "Mojito,Jigarthanda",
//     price: 250,
//     category: "Mega Fountains",
//     image: "/images/MojitoJigarthanda.jpg",
//   },
//                {
//     _id: "66",
//     name: "7 cm Magic Pencil",
//     price: 65,
//     category: "Candles & Twinkling Star",
//     image: "/images/7cmMagicPencil.jpg",
//   },
//                  {
//     _id: "67",
//     name: "12 cm Pencil",
//     price: 165,
//     category: "Candles & Twinkling Star",
//     image: "/images/12cmPencil.jpg",
//   },
//                  {
//     _id: "68",
//     name: "15 cm Pencil(3 Pcs)",
//     price: 180,
//     category: "Candles & Twinkling Star",
//     image: "/images/15cmPencil.jpg",
//   },
//                  {
//     _id: "69",
//     name: "Fuji Candles",
//     price: 330,
//     category: "Candles & Twinkling Star",
//     image: "/images/Fujicandles.jpg",
//   },
//                  {
//     _id: "70",
//     name: "1 1/2\" Twinkling Star",
//     price: 70,
//     category: "Candles & Twinkling Star",
//     image: "/images/1.5TwinklingStar.jpg",
//   },
//                  {
//     _id: "71",
//     name: "4\"Twinkling Star",
//     price: 180,
//     category: "Candles & Twinkling Star",
//     image: "/images/4TwinklingStar.jpg",
//   },
//                  {
//     _id: "72",
//     name: "Green Twinkling Star",
//     price: 110,
//     category: "Candles & Twinkling Star",
//     image: "/images/GreenTwinklingStar.jpg",
//   },
//                    {
//     _id: "73",
//     name: "Pringles Mix & 5 Colors",
//     price: 70,
//     category: "Elite Series",
//     image: "/images/PringlesMix.jpg",
//   },
//                    {
//     _id: "74",
//     name: "Oreo",
//     price: 135,
//     category: "Elite Series",
//     image: "/images/Oreo.jpg",
//   },
//                    {
//     _id: "75",
//     name: "Wizz",
//     price: 260,
//     category: "Elite Series",
//     image: "/images/Wizz.jpg",
//   },
//                    {
//     _id: "76",
//     name: "Rainbow Color Smoke(Hand Held)",
//     price: 375,
//     category: "Elite Series",
//     image: "/images/GreenTwinklingStar.jpg",
//   },
//                    {
//     _id: "77",
//     name: "Robo(5 Pcs)(Green)",
//     price: 190,
//     category: "Elite Series",
//     image: "/images/RoboGreen.jpg",
//   },
//                    {
//     _id: "78",
//     name: "Rio,Shrek(Red,Green Shower)",
//     price: 275,
//     category: "Elite Series",
//     image: "/images/Rio.jpg",
//   },
       

//   // 🔽 Add more real products here
// ];

// // ⚠️ One-time insert route — only run once
// app.get('/api/insert-products', async (req, res) => {
//   try {
//     const existing = await Product.countDocuments();
//     if (existing >= 78) {
//       return res.send('✅ Products already inserted.');
//     }

//     await Product.insertMany(products);
//     res.send('✅ Inserted 78 products!');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('❌ Error inserting products.');
//   }
// });

// // ✅ Get all products
// app.get('/api/products', async (req, res) => {
//   try {
//     const items = await Product.find();
//     res.json(items);
//   } catch (err) {
//     console.error('❌ Error fetching products:', err);
//     res.status(500).send('Server error');
//   }
// });

// // ✅ Count products
// app.get('/api/count', async (req, res) => {
//   try {
//     const count = await Product.countDocuments();
//     res.send(`Total products in DB: ${count}`);
//   } catch (err) {
//     res.status(500).send("Error counting products");
//   }
// });

// // 🚀 Start Server
// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });
// server.js
// server.js
// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const bcrypt = require("bcryptjs");   // 🔑 Password hashing
const jwt = require("jsonwebtoken");  // JWT auth

// ----------------- Models -----------------
const Product = require("./models/Product");
const Order = require("./models/Order");
const Counter = require("./models/Counter");
const User = require("./models/User");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// ----------------- Ensure folders -----------------
const uploadsPath = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsPath)) fs.mkdirSync(uploadsPath, { recursive: true });
app.use("/uploads", express.static(uploadsPath));

const imagesPath = path.join(__dirname, "images");
if (!fs.existsSync(imagesPath)) fs.mkdirSync(imagesPath, { recursive: true });
app.use("/images", express.static(imagesPath));

// ----------------- MongoDB -----------------
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/crackerShop";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ----------------- Helpers -----------------
const generateBillNumber = (n) => {
  let result = "";
  while (n > 0) {
    n--;
    result = String.fromCharCode((n % 26) + 65) + result;
    n = Math.floor(n / 26);
  }
  return result;
};

const getNextSequence = async (name = "billIndex") => {
  const updated = await Counter.findOneAndUpdate(
    { name },
    { $inc: { seq: 1 } },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
  return updated.seq;
};

// ----------------- Multer -----------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsPath),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname.replace(/\s+/g, "_")),
});
const upload = multer({ storage });

// ----------------- Order Upload -----------------
app.post(
  "/api/order-upload",
  upload.fields([
    { name: "bill", maxCount: 1 },
    { name: "screenshot", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const { name, phone, place, landmark } = req.body;
      if (!req.files?.bill || !req.files?.screenshot) {
        return res
          .status(400)
          .json({ success: false, message: "Bill or screenshot missing" });
      }

      const nextIndex = await getNextSequence("billIndex");
      const newBillNumber = generateBillNumber(nextIndex);

      const billFile = req.files.bill[0];
      const screenshotFile = req.files.screenshot[0];
      const billPath = `/uploads/${billFile.filename}`;
      const screenshotPath = `/uploads/${screenshotFile.filename}`;

      const order = new Order({
        name,
        phone,
        place,
        landmark,
        billIndex: nextIndex,
        billNumber: newBillNumber,
        billPath,
        screenshotPath,
      });

      await order.save();

      const adminNumber = process.env.ADMIN_WHATSAPP || "918148842731";
      const whatsappText = `
🧨 New CrackerMart Order 🚀
Bill No: ${newBillNumber} (${nextIndex})
👤 Name: ${name}
📞 Phone: ${phone}
📍 Place: ${place}
📌 Landmark: ${landmark}
🧾 Bill: ${req.protocol}://${req.get("host")}${billPath}
💵 Screenshot: ${req.protocol}://${req.get("host")}${screenshotPath}
      `.trim();

      const whatsappURL = `https://wa.me/${adminNumber}?text=${encodeURIComponent(
        whatsappText
      )}`;

      res.json({
        success: true,
        whatsappURL,
        billNumber: newBillNumber,
        orderId: order._id,
      });
    } catch (err) {
      console.error("Order upload error:", err);
      res.status(500).json({ success: false, message: err.message });
    }
  }
);

// ----------------- Products -----------------
const products = [
  {
    name: "Flower Pots Special",
    price: 350,
    category: "Flower Pots",
    image: "/images/Flowerpotsspecial.jpg",
  },
  {
    name: "Flower Pots Asoka",
    price: 510,
    category: "Flower Pots",
    image: "/images/Flowerpotsasoka.jpg",
  },
    {
    name: "Laddu Color Changes",
    price: 1900,
    category: "New Novelties",
    image: "/images/Colorchangingladdu.jpg",
  },
      {
    name: "Rio Shrek(Red,Green Shower)",
    price: 560,
    category: "Elite Series",
    image: "/images/Rioshrek.jpg",
  },
   {
    name: " Minions, Emoji (Gold, Silver Shower)",
    price: 560,
    category: "Elite Series",
    image: "/images/Minionsemoji.jpg",
  },
   {
    name: "PUBG Gun",
    price: 800,
    category: "Fountains",
    image: "/images/Pubggun.jpg",
  },
     {
    name: "Koi(5 Pcs)",
    price: 800,
    category: "Mini Aerial Fancy",
    image: "/images/Koi.jpg",
  },
       {
    name: "Bada Peacock",
    price: 1920,
    category: "Fountains",
    image: "/images/Peacockbig.jpg",
  },
         {
    name: "Wonder Bees",
    price: 1350,
    category: "Mega Fountains",
    image: "/images/Wonderbees.jpg",
  },
           {
    name: "Silver Bees",
    price: 1350,
    category: "Mega Fountains",
    image: "/images/Silverbees.jpg",
  },
             {
    name: "Water Queen (Fava Pot)",
    price: 750,
    category: "Mega Fountains",
    image: "/images/Favapot.jpg",
  },
{
    name: "Jolly Kola(5Pcs)",
    price: 680,
    category: "Mini Aerial Fancy",
    image: "/images/Jollycola.jpg",
  },
  {
    name: "Mega Crackling1",
    price: 600,
    category: "Mega Fountains",
    image: "/images/Megacrackling.jpg",
  },
  {
    name: "Peacock Meena",
    price: 980,
    category: "Fountains",
    image: "/images/Peackockmeena.jpg",
  },
  {
    name: "Blooming Volcano",
    price: 1500,
    category: "Mega Fountains",
    image: "/images/Bloomingvolcano.jpg",
  },
 {
    name: "Holi",
    price: 640,
    category: "Fountains",
    image: "/images/Holi.jpg",
  },
   {
    name: "Popcorn",
    price: 1050,
    category: "Fountains",
    image: "/images/Popcorn.jpg",
  },
   {
    name: "7Shot(10Pcs)",
    price: 1080,
    category: "Mini Aerial Fancy",
    image: "/images/7shot.jpg",
  },
  {
    name: "Oreo",
    price: 280,
    category: "Elite Series",
    image: "/images/Oreo.jpg",
  },
  {
    name: "12Cm Pencil",
    price: 340,
    category: "Candles & Twinkling Star",
    image: "/images/Bigcastle.jpg",
  }, 
  {
    name: "Butterfly",
    price: 470,
    category: "Fancy Novelties",
    image: "/images/Butterfly.jpg",
  }, 
  {
    name: "Photo Flash",
    price: 430,
    category: "Fancy Novelties",
    image: "/images/PhotoFlash.jpg",
  }, 
  {
    name: "Red Bijili(100's)",
    price: 180,
    category: "One Sound Crackers",
    image: "/images/Bijiliyellow.jpg",
  }, 
  {
    name: "Magic Show(money in Bank) (3 Pcs) Mini",
    price: 510,
    category: "Paper Bombs",
    image: "/images/Moneybank.jpg",
  },
  {
    name: "10 Cm Green Sparklers",
    price: 130,
    category: "10 cm Sparklers",
    image: "/images/10cmgreen.jpg",
  },
  {
    name: "Magic Show(money in Bank) (2 Pcs)",
    price: 1050,
    category: "Paper Bombs",
    image: "/images/Moneybank2.jpg",
  },
  {
    name: "30cm Electric Sparklers",
    price: 220,
    category: "30 cm Sparklers",
    image: "/images/30cmelectric.jpg",
  },
  {
    name: "30 shot I max",
    price: 2500,
    category: "Repeating Shots",
    image: "/images/imax30shot.jpg",
  },
  {
    name: "7 cm Electric Sparklers",
    price: 50,
    category: "7 cm Sparklers",
    image: "/images/7cmelectric.jpg",
  },
  {
    name: "Vonka 12 Shot",
    price: 1800,
    category: "Repeating Shots",
    image: "/images/Vonka12shot.jpg",
  },
  {
    name: "120 Shot Imax",
    price: 10000,
    category: "Repeating Shots",
    image: "/images/imax120shot.jpg",
  },
  {
    name: "Rang Jelly",
    price: 955,
    category: "Flower Pots",
    image: "/images/Rangjelly.jpg",
  },
{
    name: "Stunner",
    price: 520,
    category: "Fancy Novelties",
    image: "/images/Stunner.jpg",
  },
  {
    name: "Green Twinkling Star",
    price: 220,
    category: "Candles & Twinkling Star",
    image: "/images/Greentwinklingstar.jpg",
  },
  {
    name: "Rocket Bomb",
    price: 270,
    category: "Rockets",
    image: "/images/Rocketbomb.jpg",
  },  
  {
    name: "Green Bouquet",
    price: 960,
    category: "Flower Pots",
    image: "/images/Greenbouquet.jpg",
  },
  {
    name: "Hydro Bomb",
    price: 310,
    category: "Atom Bombs",
    image: "/images/Hydrobomb1.jpg",
  },  
  {
    name: "Flower Pot Giant",
    price: 1020,
    category: "Flower Pots",
    image: "/images/Flowerpotgiant.jpg",
  }, 
  {
    name: "Magic Stone",
    price: 95,
    category: "Fancy Novelties",
    image: "/images/Electricstone.jpg",
  },
  {
    name: "Snake Cartoons(10 Pcs)",
    price: 200,
    category: "Fancy Novelties",
    image: "/images/Snakecartoons.jpg",
  },  
  {
    name: "Greeny Bomb",
    price: 380,
    category: "Atom Bombs",
    image: "/images/Greenybomb.jpg",
  },        
{
    name: "Ruby or Meralde",
    price: 160,
    category: "Fancy Novelties",
    image: "/images/Ruby.jpg",
  },    
  {
    name: "Kango King Bomb",
    price: 600,
    category: "Atom Bombs",
    image: "/images/Kangoking.jpg",
  },  
  {
    name: "Magic Star",
    price: 110,
    category: "Fancy Novelties",
    image: "/images/Magicstar.jpg",
  }, 
  {
    name: "Zig Zag",
    price: 120,
    category: "Fancy Novelties",
    image: "/images/Zigzag.jpg",
  },       
  {
    name: "Baby Rocket",
    price: 100,
    category: "Rockets",
    image: "/images/Babyrocket.jpg",
  },   
  {
    name: "Tri Colour(5 Pcs)",
    price: 1250,
    category: "Flower Pots",
    image: "/images/Tricolor.jpg",
  },                       
  {
    name: "Laser Bomb",
    price: 1050,
    category: "Atom Bombs",
    image: "/images/Laserbomb.jpg",
  },                   
  {
    name: "Colour Blooming",
    price: 1320,
    category: "Flower Pots",
    image: "/images/Colorbloomy.jpg",
  },                           
{
    name: "4\"Gold Laxmi",
    price: 140,
    category: "One Sound Crackers",
    image: "/images/Goldlaxmi.jpg",
  },     
  {
    name: "Ground Chakkar Deluxe",
    price: 555,
    category: "Chakkars",
    image: "/images/Chakkardeluxe.jpg",
  }, 
  {
    name: "Ground Chakkar Special",
    price: 310,
    category: "Chakkars",
    image: "/images/Chakkarspecial.jpg",
  },            
  {
    name: "Two Sound Crackers",
    price: 140,
    category: "One Sound Crackers",
    image: "/images/Twosound.jpg",
  },
  {
    name: "Bijili(50's)",
    price: 100,
    category: "One Sound Crackers",
    image: "/images/Bijilismall.jpg",
  },
  {
    name: "Bijili(100's)",
    price: 200,
    category: "One Sound Crackers",
    image: "/images/Bijilired2.jpg",
  },
  {
    name: "4X4 Wheel",
    price: 670,
    category: "Chakkars",
    image: "/images/4wheel.jpg",
  },
  {
    name: "Flower Pots Big",
    price: 280,
    category: "Flower Pots",
    image: "/images/Flowerpotbig.jpg",
  },
  {
    name: "Rainbow Color Smoke (Hand Held)",
    price: 760,
    category: "Elite Series",
    image: "/images/colorsmoke.jpg",
  },
   {
    name: "Tim Tim Laddu",
    price: 940,
    category: "New Novelties",
    image: "/images/Timtim.jpg",
  },
   {
    name: "Asrafi Laddu",
    price: 1650,
    category: "New Novelties",
    image: "/images/Ashrafi.jpg",
  },
   {
    name: "Laddu 2 in 1",
    price: 1800,
    category: "New Novelties",
    image: "/images/2in1laddu.jpg",
  },
   {
    name: "Wizz",
    price: 540,
    category: "Elite Series",
    image: "/images/Wizz.jpg",
  },
   {
    name: "Deluxe Laddu",
    price: 2400,
    category: "New Novelties",
    image: "/images/Laddudeluxe.jpg",
  },  
   {
    name: "Kinder Joy",
    price: 540,
    category: "Fountains",
    image: "/images/Kinderjoy.jpg",
  },
   {
    name: "Gold Rush",
    price: 540,
    category: "Fountains",
    image: "/images/Goldrush.jpg",
  },
   {
    name: "Tango 1\" Chotta Fancy",
    price: 285,
    category: "Mini Aerial Fancy",
    image: "/images/Tango.jpg",
  },
   {
    name: "Lollipop",
    price: 1050,
    category: "Fountains",
    image: "/images/Lollipop.jpg",
  },
   {
    name: "Tango 1\" Chotta Fancy",
    price: 285,
    category: "Mini Aerial Fancy",
    image: "/images/Tango.jpg",
  },
  {
    name: "I cone",
    price: 925,
    category: "New Arrival",
    image: "/images/Icone.jpg",
  },
  {
    name: "Bimboo(20 Pcs)",
    price: 700,
    category: "Fancy Novelties",
    image: "/images/Bimboo.jpg",
  },
    {
    name: "Drone(5 Pcs)",
    price: 920,
    category: "Fancy Novelties",
    image: "/images/Drone.jpg",
  },
  {
    name: "Helicopter(5 Pcs)",
    price: 520,
    category: "Fancy Novelties",
    image: "/images/Helicopter.jpg",
  },
{
    name: "Assorted Cartoon(10 Pcs)",
    price: 150,
    category: "Fancy Novelties",
    image: "/images/Assortedcartoon.jpg",
  },
  {
    name: "Bambaram(10 Pcs)",
    price: 450,
    category: "Fancy Novelties",
    image: "/images/Bambaram.jpg",
  },
  {
    name: "Ultra Pencil",
    price: 265,
    category: "Candles & Twinkling Star",
    image: "/images/Ultrapencil.jpg",
  },
  {
    name: "7cm Green Sparklers",
    price: 66,
    category: "7 cm Green Sparklers",
    image: "/images/7cmgreen.jpg",
  },
{
    name: "15cm Green Sparklers",
    price: 66,
    category: "15 cm Green Sparklers",
    image: "/images/15cmgreen.jpg",
  },
  {
    name: "10cm Electric Sparklers",
    price: 110,
    category: "10 cm Electric Sparklers",
    image: "/images/Helicopter.jpg",
  },
{
    name: "1 3/4\"Fancy(3Pcs)",
    price: 1300,
    category: "Aerial Magic Fancy",
    image: "/images/13/4fancy.jpg",
  },
  {
    name: "VIP Matches",
    price: 1100,
    category: "Color Matches",
    image: "/images/Robin.jpg",
  },
  {
    name: "10 cm Red Sparklers",
    price: 140,
    category: "10 cm Sparklers",
    image: "/images/10cmred.jpg",
  },
  {
    name: "7 cm color Sparklers",
    price: 60,
    category: "7 cm Sparklers",
    image: "/images/7cmcolor.jpg",
  },
  {
    name: "12 cm Golden Sparklers",
    price: 200,
    category: "12 cm Sparklers",
    image: "/images/12cmgolden.jpg",
  },
  {
    name: "50 cm Electric Sparklers",
    price: 800,
    category: "50 cm Sparklers",
    image: "/images/50cmelectric.jpg",
  },
  {
    name: "15 cm Red Sparklers",
    price: 300,
    category: "15 cm Sparklers",
    image: "/images/15cmred.jpg",
  },
  {
    name: "Sky Scrapper (12 Shot)",
    price: 1400,
    category: "Repeating Shots",
    image: "/images/Skyscrapper.jpg",
  },
{
    name: "Rang Chakkar (12 Shot)",
    price: 1500,
    category: "Repeating Shots",
    image: "/images/Rang.jpg",
  },
{
    name: "5\"Fancy(2Pcs)",
    price: 4000,
    category: "Aerial Magic Fancy",
    image: "/images/Rio.jpg",
  },
{
    name: "7 cm Red Spearklers",
    price: 70,
    category: "7 cm Sparklers",
    image: "/images/7cmred.jpg",
  },
  {
    name: "Midnight Jazz (12 Shot)",
    price: 960,
    category: "Repeating shots",
    image: "/images/Midnight.jpg",
  },
  {
    name: "10 cm color Sparklers",
    price: 120,
    category: "10 cm Sparklers",
    image: "/images/10cmcolor.jpg",
  },
  {
    name: "15 cm Electric Sparklers",
    price: 220,
    category: "15 cm Sparklers",
    image: "/images/15cmelectric.jpg",
  },
  {
    name: "30 cm color Sparklers",
    price: 240,
    category: "30 cm Sparklers",
    image: "/images/30cmcolor.jpg",
  },
  {
    name: "Musical Siren",
    price: 950,
    category: "Fancy Novelties",
    image: "/images/Musicalsiren.jpg",
  },
  {
    name: "4\"Twinkling Star",
    price: 380,
    category: "Candles & Twinkling Star",
    image: "/images/4inchsatai.jpg",
  },
  {
    name: "Silver Jet",
    price: 770,
    category: "Rockets",
    image: "/images/Silverjet.jpg",
  },
  {
    name: "Paper Bomb(Big)",
    price: 810,
    category: "Paper Bombs",
    image: "/images/1kgpaperbomb.jpg",
  },
  {
    name: "Thunder Bold Bomb",
    price: 480,
    category: "Atom Bombs",
    image: "/images/Thunderbold.jpg",
  },
{
    name: "1 1/2\"Twinkling Star",
    price: 150,
    category: "Candles & Twinkling Star",
    image: "/images/halfsatai.jpg",
  },
  {
    name: "Sky Shot(10 Pcs)",
    price: 500,
    category: "Fancy Novelties",
    image: "/images/Skyshot.jpg",
  },
  {
    name: "Bullet Bomb",
    price: 110,
    category: "Atom Bombs",
    image: "/images/Bulletbomb.jpg",
  },
{
    name: "30 cm Green Sparklers",
    price: 260,
    category: "30 cm Sparklers",
    image: "/images/30cmgreen.jpg",
  },
  {
    name: "12 Shot",
    price: 800,
    category: "Repeating Shots",
    image: "/images/Rockstar.jpg",
  },
  {
    name: "15 cm color Sparklers",
    price: 240,
    category: "15 cm Sparklers",
    image: "/images/15cmyellow.jpg",
  },
  {
    name: "30 cm Red Sparklers",
    price: 300,
    category: "30 cm Sparklers",
    image: "/images/30cmred.jpg",
  },
  {
    name: "Vonka 24 Shot",
    price: 3600,
    category: "Repeating Shots",
    image: "/images/vonka24.jpg",
  },
  {
    name: "Dhandayutham",
    price: 925,
    category: "New Arrival",
    image: "/images/Dan.jpg",
  },
  {
    name: "Vajrayutham",
    price: 925,
    category: "New Arrival",
    image: "/images/Van.jpg",
  },
  {
    name: "2 3/4 Kuruvi",
    price: 40,
    category: "One Sound Crackers",
    image: "/images/Kuruvi.jpg",
  },
  {
    name: "Dancing Wheel",
    price: 390,
    category: "Chakkars",
    image: "/images/Dancing.jpg",
  },
  {
    name: "Ground Chakkar Big (25 Pcs)",
    price: 340,
    category: "Chakkars",
    image: "/images/Chakkarbig25.jpg",
  },
{
    name: "4\"Ganapathy",
    price: 155,
    category: "One Sound Crackers",
    image: "/images/Ganpath.jpg",
  },
  {
    name: "Fuji Candles",
    price: 680,
    category: "Candles & Twinkling Star",
    image: "/images/Fuji.jpg",
  },
  {
    name: "Strom Super Deluxe",
    price: 205,
    category: "One Sound Crackers",
    image: "/images/Strom.jpg",
  },
  {
    name: "Flower Pots Small",
    price: 230,
    category: "Flower Pots",
    image: "/images/Flowerpotsmall.jpg",
  },
  {
    name: "Ground Chakkar Big (10 Pcs)",
    price: 150,
    category: "Chakkars",
    image: "/images/Chakkarbig.jpg",
  },
  {
    name: "4\"Deluxe Laxmi",
    price: 140,
    category: "One Sound Crackers",
    image: "/images/4deluxe.jpg",
  },
  {
    name: "4\"Laxmi",
    price: 85,
    category: "One Sound Crackers",
    image: "/images/4laxmi.jpg",
  },
  {
    name: "Colour Paper Bomb",
    price: 330,
    category: "Paper Bomb",
    image: "/images/colorpaperbomb.jpg",
  },
{
    name: "Jot Down(3Pcs)",
    price: 580,
    category: "Candles & Twinkling Star",
    image: "/images/Jotdown.jpg",
  },
  {
    name: "Chakkar Spinner Special",
    price: 500,
    category: "Chakkars",
    image: "/images/Spinnerspecial.jpg",
  },
  {
    name: "Tin",
    price: 490,
    category: "Fancy Novelties",
    image: "/images/Tin.jpg",
  },
  {
    name: "2 1/2 \" Fancy(1Pcs)",
    price: 1030,
    category: "Aerial Magic Fancy",
    image: "/images/2halfinch.jpg",
  },
  {
    name: "4\" Fancy (1 Pcs)",
    price: 1500,
    category: "Aerial Magic Fancy",
    image: "/images/4inch.jpg",
  },
  {
    name: "3\" Fancy (1 Pcs)",
    price: 1325,
    category: "Aerial Magic Fancy",
    image: "/images/3inch.jpg",
  },
  {
    name: "6 in 1 King",
    price: 290,
    category: "Color Matches",
    image: "/images/6in1.jpg",
  },
  {
    name: "Rotating Sparklers",
    price: 900,
    category: "Sparklers",
    image: "/images/rotating.jpg",
  },
  {
    name: "10 Shot (Hand Held) New Arrival",
    price: 2000,
    category: "Repeating Shots",
    image: "/images/10in1.jpg",
  },
  {
    name: "5 in 1 Sparklers (10 Cm)",
    price: 700,
    category: "Sparklers",
    image: "/images/5in1.jpg",
  },
  {
    name: "4\" Fancy Double Ball",
    price: 2100,
    category: "Aerial Magic Fancy",
    image: "/images/Doubleball.jpg",
  },
  {
    name: "5\"Fancy",
    price: 2000,
    category: "Aerial Magic Fancy",
    image: "/images/5inch.jpg",
  },
  {
    name: "4\" Fancy 7 Steps",
    price: 1850,
    category: "Aerial Magic Fancy",
    image: "/images/7step.jpg",
  },
  {
    name: "Paper Bomb(Small)",
    price: 530,
    category: "Paper Bombs",
    image: "/images/250g.jpg",
  },
  {
    name: "Classic 5 in 1",
    price: 550,
    category: "Color Matches",
    image: "/images/Classic5in1.jpg",
  },
  
  
  // 🔽 Add more products here if needed
];

// ✅ Reset products (wipe + insert fresh)
app.get("/api/reset-products", async (req, res) => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    res.send("✅ Products reset (old ones cleared, new ones inserted).");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Error resetting products.");
  }
});

// ✅ Fetch products
app.get("/api/products", async (req, res) => {
  try {
    const items = await Product.find();
    res.json(items);
  } catch (err) {
    console.error("❌ Error fetching products:", err);
    res.status(500).send("Server error");
  }
});

// ✅ Count products
app.get("/api/count", async (req, res) => {
  try {
    const count = await Product.countDocuments();
    res.send(`Total products in DB: ${count}`);
  } catch (err) {
    res.status(500).send("Error counting products");
  }
});

// ----------------- Auth: Signup -----------------
app.post("/api/signup", async (req, res) => {
  try {
    const { name, phone, email, place, district, password, confirmPassword } =
      req.body;

    if (
      !name ||
      !phone ||
      !email ||
      !place ||
      !district ||
      !password ||
      !confirmPassword
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.json({
        success: false,
        message: "Passwords do not match",
      });
    }

    const existing = await User.findOne({ $or: [{ phone }, { email }] });
    if (existing) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      phone,
      email,
      place,
      district,
      password: hashedPassword,
    });

    await user.save();
    console.log("✅ User signed up:", { phone, email });

    return res.json({ success: true, message: "Signup successful" });
  } catch (err) {
    console.error("Signup error:", err);
    return res
      .status(500)
      .json({ success: false, message: err.message });
  }
});

// ----------------- Auth: Signin -----------------
app.post("/api/signin", async (req, res) => {
  try {
    const { phoneOrEmail, password } = req.body;
    console.log("📩 Signin request:", phoneOrEmail);

    const user = await User.findOne({
      $or: [{ phone: phoneOrEmail }, { email: phoneOrEmail }],
    });

    if (!user) {
      return res.json({
        success: false,
        message: "User not found. Please sign up first.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

    return res.json({
      success: true,
      message: "Signin successful",
      user: {
        id: user._id,
        name: user.name,
        phone: user.phone,
        email: user.email,
      },
      token,
    });
  } catch (err) {
    console.error("Signin error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Server error" });
  }
});

// ----------------- Debug Routes -----------------
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find().select("-__v -password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ----------------- Health -----------------
app.get("/api/health", (req, res) => res.json({ ok: true }));

// ----------------- Serve React -----------------
if (process.env.NODE_ENV === "production") {
  const clientBuildPath = path.join(__dirname, "client", "build");
  if (fs.existsSync(clientBuildPath)) {
    app.use(express.static(clientBuildPath));
    app.get("*", (req, res) =>
      res.sendFile(path.join(clientBuildPath, "index.html"))
    );
  }
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
