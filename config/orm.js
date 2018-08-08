const connection = require('../config/connection.js');


//Function that makes object/key pairs into SQL syntax
function objToSql(ob) {
    let arr = [];

    //Loop through keys and push the key/value as a string int arr
    for (var key in ob) {
        let value = ob[key];
        //check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            //checks if there is a space, if there is
            //then it adds quotes to it
            if (typeof value === "string" && value.indexOf(" ") >= 0)
                value = " " + value + "'";
        }
        //Example: {burger: 'cheeseburger'} to
        //["burger='burger'"]  
        arr.push(key + "=" + value);
    }
}

const orm = {
    selectAll: function (tableInput, cb) {
        console.log("This selects all");
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },

    insertOne: function () {
        console.log("This inserts one");
    },

    updateOne: function () {
        console.log("This updates one");

        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(obColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log("What SQL is doing: " + queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                cb(result);
            }

        });
    }
};

module.exports = orm;