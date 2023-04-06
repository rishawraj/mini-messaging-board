var express = require("express");
var router = express.Router();

/* GET home page. */

const messages = [
  {
    text: "Hi there!",
    user: "Rishaw",
    added: new Date(),
  },
  {
    text: "Hello world!",
    user: "Himesh",
    added: new Date(),
  },
];

router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
