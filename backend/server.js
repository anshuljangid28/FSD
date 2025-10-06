const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// Enable CORS
app.use(cors({
  origin: "http://localhost:3000", // React app URL
  credentials: true, // if you plan to send cookies
}));

// Connect DB
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
