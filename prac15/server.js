const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");

const authRoutes = require("./routes/auth");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: "library-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 } // 1 hour session
}));

// EJS template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Use routes
app.use("/", authRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Library Portal running at http://localhost:${PORT}`);
});
