const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
// const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/posts");
// const Post = require("./models/Post");
const shuffleRoute = require('./routes/shuffle');
dotenv.config();
connectDB();

const app = express();
// app.use(cors());
app.use(bodyParser.json());

// Allow all origins
// app.use(cors({
  // origin: ['https://dashboard.craftifyproductions.com', 'https://craftifyproductions.com'],
    // methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],  // Allows these specific methods
    // allowedHeaders: ['Content-Type', 'Authorization'],
  // }));


  // Bulk insert route
// app.post("/bulk-insert", async (req, res) => {
//   const data = [];

//   try {
//     const result = await Post.insertMany(data, { ordered: false });
//     res.status(201).json({
//       message: `${result.length} documents were inserted successfully`,
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error inserting documents",
//       error: error.message,
//     });
//   }
// });
// Routes
app.use("/api", authRoutes);
app.use("/api/posts", postRoutes);
// Change this to use '/api/cards' for shuffle
app.use('/api/cards', shuffleRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
