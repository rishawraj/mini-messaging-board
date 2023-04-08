const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const messages = require("../models/message");

const router = express.Router();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log("MongoDB Connected!!");
  })
  .catch((err) => console.log(err));

router.get("/", function (req, res, next) {
  messages
    .find({})
    .then((messages) => {
      res.render("index", { title: "mini-message-board", messages });
    })
    .catch((err) => {
      res.render("error", { error: err });
    });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", (req, res) => {
  const newMessage = new messages({
    name: req.body.name,
    message: req.body.message,
  });

  newMessage
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.error("Error saving message", err);
      res.render("error", { error: err });
    });
});

module.exports = router;
