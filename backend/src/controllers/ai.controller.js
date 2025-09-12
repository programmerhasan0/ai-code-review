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

const getResponse = async (req, res) => {
    const prompt = req.query.prompt;

    if (!prompt) return res.status(400).send("prompt is required");

    const response = await aiService(prompt);

    res.send(response);
};

module.exports.getResponse = getResponse;
