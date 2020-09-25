// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(table, cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(table, values) {
    orm.insertOne("burgers", [], function(res) {
      cb(res);
    });
  },
  updateOne: function(colToChange, newValue, condition) {
    orm.updateOne("devoured", true, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.export = burger;
