const mysql = require("mysql");

// Establishing connection the mysql
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Saur0n!1", 
      database: "burgers_db"
    });
}

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