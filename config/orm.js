// Import MySQL connection.
const connection = require("../config/connection.js");

const orm = {
    selectAll: function(cb) {
        // function to retrieve all of the burgers from the DB.
        // query is stored in a variable ONLY so I may access the query.sql down below. Without it, query is undefined and it gives an error.
        const queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            } cb(result);
            
        });
    },
    // function that will insert a burger name
    insertOne: function(burger, cb) {
        const queryString = "INSERT INTO burgers (burger_name) VALUES (?)"; 
        connection.query(queryString, [burger], function(err, result) {
            if(err) {
                throw err;
            } cb(result);
        
        });
    },
    // function that will update the devoured status of the burger
    updateOne: function(id, cb) {
        const queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, [id], function(err, result) {
            if (err) {
                throw err;
            } else {
                cb(result);
            }
        });
    }
}


module.exports = orm;