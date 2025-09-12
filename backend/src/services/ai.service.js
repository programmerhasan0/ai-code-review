/**
 *
 * Project Name : code-review
 * Developer : Md Habibul Hasan
 * Developer Email : programmerhasan0@gmail.com
 * File name : ai.service.js
 * File description: Google gemini API integration related codes
 * Date : 12/09/2025
 *
 */

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

const generateContent = async (prompt) => {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });
    return response.text;
};

module.exports = generateContent;
