
const path = require("path");
const express = require("express");
const app = express(); // create express app
var history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static("public"));
// start express server on port 80
app.listen(process.env.PORT || 4000);