// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },

  insertOne: function(name, cb) {
    orm.insertOne(name, function(res) {
      cb(res);
    });
  },

  updateOne: function(newID, cb) {
    orm.updateOne(newID, function(res) {
      cb(res);
    });
  },

  delete: function(newID, cb){
    orm.delete(newID, function(res){
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
