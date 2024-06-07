const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  name: String,
  email: String,
  Phonenumber: Number,
  desc: String,
});

module.exports = mongoose.model("servers", ContactSchema);
