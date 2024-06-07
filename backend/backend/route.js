const express = require("express");
const contactcontrollars = require("./controllar");
const route = express.Router();

route.post("/register", contactcontrollars.adduser);

module.exports = route;
