// Import MySQL connection.
var connection = require("./connection.js");


//custom ORM for our mySQL
var orm = {
    selectAll: function (input, callback) {
        var queryString = "SELECT * FROM burgers" + input + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    insertOne: function (name, callback) {
        connection.query("INSERT INTO burgers SET ?", {
            name: name,
            devoured: false,
        }, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    updateOne: function (ID, callback) {
        connection.query("UPDATE burgers SET ? WHERE ?", {
            devoured: true,
            id: ID
        }, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    }
};

//export ORM object
module.exports = orm;
