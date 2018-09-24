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

function amazonItems(inventory) {
    inquirer
        .prompt([
            {
                type: "input",
                name: "choice",
                message: "Please select an item",
                validate: function(val) {
                    return !isNaN(val) || val.toLowerCase() === "q";
                }
            }
        ])

        .then(function(val) {

            check(val.choice);
            var choiceID = parseInt(val.choice);
            var product = checkInventory(choiceID, inventory);

            if (product) {
                quantity(product);
            }
            else {
                loadProducts();
            }
        });
}

function quantity(product) {
    inquirer
        .prompt([
            {
                type: "input",
                name: "quantity",
                message: "How many would you like to buy?",
                validate: function(val) {
                    return val > 0 || val.toLowerCase() === "q";
            }
        }
    ])
    .then(function(val) {

        check(val.quantity);
        var quantity = parseInt(val.quantity);

        if (quantity > stock.quantity) {
            loadProducts();
        }
        else {
            confirmPurchase(product, quantity);
        }
    });
}

function check(choiceID, inventory) {
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].item_id === choiceID) {
            return inventory[i];
        }
    }
    return null;
}

function check(choice) {
    if (choice.toLowerCase() === "q") {
        process.exit(0);
    }
};
