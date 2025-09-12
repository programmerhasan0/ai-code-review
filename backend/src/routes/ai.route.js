/**
 *
 * Project Name : code-review
 * Developer : Md Habibul Hasan
 * Developer Email : programmerhasan0@gmail.com
 * File name : ai.route.js
 * File description: This file will handle all ai related routes for the app
 * Date : 12/09/2025
 *
 */

const router = require("express").Router();
const { getResponse } = require("../controllers/ai.controller");

router.get("/get-response", getResponse);

module.exports = router;
