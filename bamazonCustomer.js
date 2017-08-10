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
            case "Bamazon Echo", "Electronics":
                buyEcho();
                break;
            case "Bamazon Kindle":
                buyEcho();
                break;
            case "How to be an Awesome JavaScript Developer":
                buyEcho();
                break;
            case "Star Wars: Episodes IV-VI":
                buyEcho();
                break;
            case "Garden Gnome":
                buyEcho();
                break;
            case "Bananas":
                buyEcho();
                break;
            case "Creedance Clearwater Revival box set":
                buyEcho();
                break;
            case "Basketball":
                buyEcho();
                break;
            case "Motor oil":
                buyEcho();
                break;
            case "Parks and Recreation DVD series":
                buyEcho();
                break;
        }
    })
}