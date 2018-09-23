// Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");

var sqlConnection = mysql.createConnection( {
    host: "localhost",
    port: 3306,

// Database credential
    user: "root",
    password: "root",
    database: "bamzon"
});

connection.connect(function(error) {
    if (error) {
        console.log(error);
    }
    loadProducts();
});

function loadProducts() {

    console.log("SELECT * FROM products", function(error, res) {
        if (error) throw error;

        amazonItems(res);
    });
}

