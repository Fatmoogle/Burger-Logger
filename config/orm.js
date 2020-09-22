// Import MySQL connection.
const connection = require("./connection.js");

const orm = {
    selectAll: function(whatToSelect, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
            if(err) {
                throw err;
            } else {
                console.log(result);
            }
        });
    },
    insertOne: function(whatToSelect, tableInput) {
        const queryString = "INSERT INTO ?? SET ?"
    },
    updateOne: {

    }
}





// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

// * Export the ORM object in `module.exports`.