/**
 *
 * Project Name : code-review
 * Developer : Md Habibul Hasan
 * Developer Email : programmerhasan0@gmail.com
 * File name : ai.controller.js
 * File description: This file will handle ai related controllers
 * Date : 12/09/2025
 *
 */

const aiService = require("../services/ai.service");

const getReview = async (req, res) => {
    const code = req.body.code;

    if (!code) return res.status(400).send("code is required");

    const response = await aiService(code);

    res.send(response);
};

module.exports.getReview = getReview;
