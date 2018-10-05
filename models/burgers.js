//node dependency
var orm = require("../config/orm.js");

var burgers = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  insertOne: function(name, callback) {
    orm.insertOne("burgers", name, function(res) {
      callback(res);
    });
  },
  updateOne: function(ID, callback) {
    orm.updateOne("burgers", ID, function(res) {
      callback(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burgers;
