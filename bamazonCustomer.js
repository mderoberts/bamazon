var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "pwd123",
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
        message: "What would you like to buy?",
        choices: [/*List choices or pull from DB*/]
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
                buyKindle();
                break;
            case "How to be an Awesome JavaScript Developer":
                buyJsBook();
                break;
            case "Star Wars: Episodes IV-VI":
                buyStarWars();
                break;
            case "Garden Gnome":
                buyGnome();
                break;
            case "Bananas":
                buyBananas();
                break;
            case "Creedance Clearwater Revival box set":
                buyCcr();
                break;
            case "Basketball":
                buyBasketball();
                break;
            case "Motor oil":
                buyOil();
                break;
            case "Parks and Recreation DVD series":
                buyParksRec();
                break;
        }
    });
}

function buyEcho() {

}

function buyKindle() {

}

function buyJsBook() {
    
}

function buyStarWars() {
    
}

function buyGnome() {
    
}

function buyBananas() {
    
}

function buyCcr() {
    
}

function buyBasketball() {
    
}

function buyOil() {
    
}
















