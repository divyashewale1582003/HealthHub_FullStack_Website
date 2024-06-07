const express = require("express");

const app = express();

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/HealthHub")
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.send("localhost 8000");
});

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.get("/", (req, res) => {
  res.send("running on localhost 8000");
});

const route = require("./backend/route");
app.use("/", route);

app.listen(8000, () => {
  console.log("running on localhost 8000");
});
