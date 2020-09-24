// Import MySQL connection.
const connection = require("./connection.js");

const orm = {
    selectAll: function(cb) {
        // query is stored in a variable ONLY so I may access the query.sql down below. Without it, query is undefined and it gives an error.
        const queryString = "SELECT * FROM burgers";
        const query = connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            } else {
                console.log(query.sql);
                cb(result);
            }
        });
    },
    insertOne: function(burgerName, devouredValue, cb) {
        const queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)"; 
        const query = connection.query(queryString, [burgerName, devouredValue], function(err, result) {
            if(err) {
                throw err;
            } else {
                console.log(query.sql);
                cb(result);
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