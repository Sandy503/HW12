const mysql = require("mysql")


var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sandy408",
    database: "employees",
  });

module.exports = connection