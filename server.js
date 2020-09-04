
const path = require("path");
const express = require("express");
const app = express(); // create express app

app.use(express.static("public"));

app.listen(80, () => {
});