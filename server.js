
const path = require("path");
const express = require("express");
const app = express(); // create express app

app.use(express.static("public"));

// start express server on port 80
app.listen(process.env.PORT || 4000);