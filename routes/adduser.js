const express = require('express')
const router = express.Router()
const User = require("../models/CustomerSchema");
var moment = require('moment');

router.get("/add.html", (req, res) => {
    res.render("user/add");
  });
  
  router.post("/add.html", (req, res) => {
    console.log(req.body);
    user
      .create(req.body)
      .then((result) => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  
    // res.redirect("/user/add.html")
  });

  module.exports = router