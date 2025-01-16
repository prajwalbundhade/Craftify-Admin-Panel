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
const cors = require('cors');
const allowedOrigins = [
    'https://craftifyservice.online', 
    'http://craftifyservice.online',
     'https://www.craftifyservice.online',
     'https://dashboard.craftifyservice.online', 
    'http://dashboard.craftifyservice.online',
     'https://www.dashboard.craftifyservice.online'   
  ];
  
  const corsOptions = {
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {  // !origin allows Postman/CLI tools to make requests
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST'],
    credentials: true,
  };
  
  // Enable CORS with the options
  app.use(cors(corsOptions));

// Routes
app.use("/api", authRoutes);
app.use("/api/posts", postRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
