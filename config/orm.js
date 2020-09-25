var connection = require("./connection.js");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
      // translate array of strings to a single comma-separated string
  return arr.toString();
};

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
        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true},  condition], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
};

module.exports = orm;
