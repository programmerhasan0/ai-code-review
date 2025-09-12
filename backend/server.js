/**
 *
 * Project Name : code review (Gemini)
 * Developer : Md Habibul Hasan
 * Developer Email : programmerhasan0@gmail.com
 * File name : server.js
 * File description: this file will listen the app
 * Date : 12/09/2025
 *
 */

const { app, port } = require("./src/app");

app.listen(port, () => {
    console.log(`server is running on port 3000`);
});
