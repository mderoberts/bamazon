var mysql = require('mysql');
var inquirer = requirer('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazonDB"
});

connection.connect(function(err) {
    if(err) throw err;
    startShopping();
});

function startShopping() {
    inquirer.prompt ({
        name: "selectId",
        type: "rawlist",
        message: "What would you like to buy?"
    } , {
        name: "quantity",
        type: "input",
        message: "How many would you like to buy?"
    }).then(function(answer) {
        switch (answer.action) {
            case 
        }
    })
}