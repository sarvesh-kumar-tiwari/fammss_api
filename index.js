const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');
const routes = require('./routes/User');

app.use(cors());
app.use(bodyParser.json());
app.use(routes);
const port = process.env.PORT || 9090;
app.listen(port, function () {
    console.log("listening on port 8080")
})