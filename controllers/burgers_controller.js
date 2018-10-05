//Dependencies
var express = require("express");
var router = express.Router();
var burgers = require("../models/burgers.js");

//Route Set up

//Index Redirect Route
router.get("/", function(req, res){
    res.redirect("/index");
});

//Index Page Route
router.get("/index", function (req, res) {
    burgers.selectAll(function(data) {
      var burgerObject = { burgers: data };
      //console.log(burgerObject);
      res.render("index", burgerObject);
    });
  });

// Create a Burger Route
router.post("/burgers/create", function (req, res) {
    burgers.insertOne(req.body.name, function() {
      res.redirect("/index");
    });
  });

// Devour Burger Route
router.post("/burgers/eat/:id", function(req, res) {
    burgers.updateOne(req.params.id, function() {
        res.redirect("/index");
    });
});

// Export routes for server
module.exports = router;
