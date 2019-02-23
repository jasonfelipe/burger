// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "l7cup2om0gngra77.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "root",
  password: "ygkdud08k4c6ob67",
  database: "oztdyogeb75xeu4u"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
