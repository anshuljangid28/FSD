const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const DATA_FILE = path.join(__dirname, "..", "data.json");

// Utility functions
function readData() {
    if (!fs.existsSync(DATA_FILE)) return {};
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
}

function writeData(data) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// Home page
router.get("/", (req, res) => {
    if (req.session.username) {
        res.redirect("/profile");
    } else {
        res.render("index", { loggedIn: false, username: null, loginTime: null, logoutTime: null });
    }
});

// Login route
router.post("/login", (req, res) => {
    const username = req.body.username;
    if (!username) return res.send("Enter a valid username.");

    const loginTime = new Date().toLocaleString();
    req.session.username = username;
    req.session.loginTime = loginTime;

    let data = readData();

    if (!data[username]) {
        data[username] = { loginTimes: [], logoutTimes: [] };
    }

    // Ensure arrays exist
    data[username].loginTimes = data[username].loginTimes || [];
    data[username].logoutTimes = data[username].logoutTimes || [];

    data[username].loginTimes.push(loginTime);
    writeData(data);

    res.redirect("/profile");
});

// Profile page
router.get("/profile", (req, res) => {
    if (!req.session.username) return res.redirect("/");

    let data = readData();
    const userData = data[req.session.username];

    const lastLogin = userData?.loginTimes?.slice(-1)[0] || null;
    const lastLogout = userData?.logoutTimes?.slice(-1)[0] || null;

    res.render("index", {
        loggedIn: true,
        username: req.session.username,
        loginTime: lastLogin,
        logoutTime: lastLogout,
        loginHistory: userData.loginTimes,
        logoutHistory: userData.logoutTimes
    });
});

// Logout route
router.get("/logout", (req, res) => {
    if (req.session.username) {
        const logoutTime = new Date().toLocaleString();
        let data = readData();

        if (!data[req.session.username]) {
            data[req.session.username] = { loginTimes: [], logoutTimes: [] };
        }

        // Ensure arrays exist
        data[req.session.username].loginTimes = data[req.session.username].loginTimes || [];
        data[req.session.username].logoutTimes = data[req.session.username].logoutTimes || [];

        data[req.session.username].logoutTimes.push(logoutTime);
        writeData(data);
    }

    req.session.destroy(err => {
        if (err) return res.send("Error logging out");
        res.redirect("/");
    });
});

module.exports = router;
