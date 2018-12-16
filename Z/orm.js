const connection = require("../config/connection");

// Create Object Responsive Mapping for MySQL:

const orm = {
    // SELECT * FROM table
    selectAll: function (table, ormCallBack) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            ormCallBack(result);
        });
    },
    //INSERT INTO table (column) VALUE ("value")
    insertOne: function (table, column, value, ormCallBack) {
        const queryString = "INSERT INTO ?? (??) VALUE (?)";
        connection.query(queryString, [table, column, value], function (err, result) {
            if (err) throw err;
            ormCallBack(result)
        });
    },
    //UPDATE table SET column = "value" WHERE id = "value"
    updateOne: function (table, column, newValue, whereColumn, whereValue, ormCallBack) {
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, column, newValue, whereColumn, whereValue], function (
            err,
            result
        ) {
            if (err) throw err;
            ormCallBack(result);
        });
    }
};

// module.exports = orm;