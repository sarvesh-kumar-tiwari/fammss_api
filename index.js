const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.json());
app.get('/', function (req, res) {
    res.send("<h1>Hello</h1>");
})
const port = process.env.PORT || 9090;
app.listen(port, function (err, res) {
    console.log("listen", port);
})