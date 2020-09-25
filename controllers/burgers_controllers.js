var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var burgerObject = { burgers: data };
    res.render("index", burgerObject);
  });
});

router.post("/burgers/create", function(req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect("/");
  });
});

router.put("/burgers/eaten/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.updateOne( condition, function(result) {
      res.redirect("/");
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
