const mysql = require("mysql");

var connection;

if( process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Welcome123",
        database: "burgers_db",
    });
}

connection.connect(function (error) {
    if (error) throw error;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;