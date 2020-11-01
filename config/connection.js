const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306, // ALWAYS 3306
    user: "root",
    password: "Welcome123",
    database: "burgers_db",
});

connection.connect(function (error) {
    if (error) throw error;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;