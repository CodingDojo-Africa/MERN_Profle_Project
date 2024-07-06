const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path'); 
 
//Configure dotenv files above using any other library and files
dotenv.config({ path: './config/config.env' });
const API_BASE_URL = process.env.API_BASE_URL;

//Creating an app from express
const app = express();
const cors = require("cors");
app.use(express.static("public"));
//Middleware
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }), express.json(), express.urlencoded({ extended: true }));
app.use('/_images', express.static('public'))
// Database connection
require("./config/mongoose.config")();

// Authentication middleware
require('./config/jwt.config')

// Route
require('./routes/admin.routes')(app);
require('./routes/project.routes')(app);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
});
