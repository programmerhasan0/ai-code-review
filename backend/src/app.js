/**
 *
 * Project Name : Code Review (Gemini)
 * Developer : Md Habibul Hasan
 * Developer Email : programmerhasan0@gmail.com
 * File name : app.js
 * File description: This is where I've created & exported the express app
 * Date : 12/09/2025
 *
 */

const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Server Running Properly");
});

module.exports = { app, port };
