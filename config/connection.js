const mysql = require("mysql");

// Setting up conection to MySQL
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Saur0n!1",
    database: "burgers_db"
});

// Function to initialize the connection to the database
connection.connect(err => {
    if (err) {
        throw err;
    } else {
        console.log(`You are connected as ID ${connection.threadId}`);
    }
});

// Exporting the connection
module.exports = connection;