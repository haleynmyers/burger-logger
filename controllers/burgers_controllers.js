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
router.post("/api", function(req, res) {
  burger.insertOne(req.body.burger_name, function(result) {

    res.json({id: result.id});
  });
});
 //put or update if it has been eaten
router.put("/api/:id", function(req, res) {
  burger.updateOne( req.params.id, function() {
      res.redirect("/");
    }
  );
});
//delete from list
router.delete("/burgers/:id", function (req,res){
  burger.delete(req.params.id, function(){
    res.json("Burger deleted");
  });
});

// Export routes for server.js to use.
module.exports = router;
