var connection = require("./connection.js");

var orm = {
    all: function (table) {
        var queryString = 'SELECT * FROM ?? ';//worked with tutor
        connection.query(queryString, [table], (err, result) => {
            if (err) throw err;
            console.log(result);
            return result;
        });
    },
    insertOne: function (values) {
        var queryString = 'INSERT INTO burgers SET ?';
        connection.query(queryString, [values], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function () {
        var queryString = 'UPDATE ?? ';
        connection.query(queryString, [colToUpdate, newValue], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
};

module.exports = orm;
