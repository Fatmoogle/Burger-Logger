// Import MySQL connection.
const connection = require("./connection.js");

const orm = {
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if(err) {
                throw err;
            } else {
                console.log(query.sql);
                console.log(result);
            }
        });
    },
    insertOne: function(tableName, burgerName, devouredValue) {
        const queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)"; 
        connection.query(queryString, [tableName, burgerName, devouredValue], function(err, result) {
            if(err) {
                throw err;
            } else {
                console.log(query.sql);
                console.log(result);
            }
        });
    },
    updateOne: function(tableName, objColVals, condition) {
        const queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString, [tableName, objColVals, condition], function(err, result) {
            if (err) {
                throw err;
            } else {
                console.log(query.sql);
                console.log(result);
            }
        });
    }
}

module.exports = orm;

// INSERT INTO burgers (burger_name, devoured)
// VALUES ("Jalapeno Burger", false);

// "UPDATE employee SET ? WHERE ?"

// "UPDATE auctions SET ? WHERE ?",
// [
//   {
//     highest_bid: answer.bid
//   },
//   {
//     id: chosenItem.id
//   }

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

// * Export the ORM object in `module.exports`.