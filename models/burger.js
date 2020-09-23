const orm = require("../config/orm.js");

console.log(orm);

// Select all of the burger options from the burgers table
orm.selectAll("burgers");

orm.insertOne("burgers", "Big Mic", true);

// orm.updateOne




// var orm = require("./config/orm.js");

// // Find all the pets ordering by the lowest price to the highest price.
// orm.selectAndOrder("animal_name", "pets", "price");

// // Find a pet in the pets table by an animal_name of Rachel.
// orm.selectWhere("pets", "animal_name", "Rachel");

// // Find the buyer with the most pets.
// orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");



// const orm = {
//     selectAll: function(tableInput) {
//         var queryString = "SELECT * FROM ??";
//         connection.query(queryString, [tableInput], function(err, result) {
//             if(err) {
//                 throw err;
//             } else {
//                 console.log(query.sql);
//                 console.log(result);
//             }
//         });
//     },
//     insertOne: function(tableName, burgerName, devouredValue) {
//         const queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)"; 
//         connection.query(queryString, [tableName, burgerName, devouredValue], function(err, result) {
//             if(err) {
//                 throw err;
//             } else {
//                 console.log(query.sql);
//                 console.log(result);
//             }
//         });
//     },
//     updateOne: function(tableName, objColVals, condition) {
//         const queryString = "UPDATE ?? SET ? WHERE ?";
//         connection.query(queryString, [tableName, objColVals, condition], function(err, result) {
//             if (err) {
//                 throw err;
//             } else {
//                 console.log(query.sql);
//                 console.log(result);
//             }
//         });
//     }
// }