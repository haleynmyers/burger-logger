var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');

// get all burgers on list and populate page.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var burgerObject = { burgers: data };
    res.render("index", burgerObject);
  });
});

//post or create new list item
router.post("/api/burgers", function(req, res) {
  burger.insertOne(req.body.burger_name, function(result) {
    res.redirect("/");
  });
});

 //put or update if it has been eaten
router.put("/api/burgers/:id", function(req, res) {
  burger.updateOne( req.params.id, function(result) {
      res.redirect("/");
    }
  );
});


// Export routes for server.js to use.
module.exports = router;
