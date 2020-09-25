var connection = require("./connection.js");

var orm = {
    selectAll: function (cb) {
        connection.query('SELECT * FROM burgers', (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    insertOne: function (name, cb) {
        connection.query('INSERT INTO burgers SET ?', {
          burger_name: name,
          devoured: false
        }, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    updateOne: function (newID, cb) {
        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true},  {id: newID} ], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    delete: function(newID, cb){
        connection.query('DELETE FROM burgers WHERE id = ?', newID, (err, res) =>{
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;
