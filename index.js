const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const path = require("path");
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// se connecter à la base de donnée
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL);

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 255 },
    priceHt: { type: Number, required: true },
    creationDate: { type: Date, required: true, default: Date.now },
    dateUpdate: { type: Date, required: false },
});

let Product = mongoose.model("Product", ProductSchema);


const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
  });