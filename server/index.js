const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/posts");
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Allow all origins
app.use(cors({
  origin: ['https://dashboard.craftifyservice.online', 'https://craftifyservice.online'],
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],  // Allows these specific methods
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

// Routes
app.use("/api", authRoutes);
app.use("/api/posts", postRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
