var mysql = require('mysql');
var inquirer = require('inquirer');
var cliTable = require('cli-table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "pwd123",
    database: "bamazonDB"
});

connection.connect(function(err) {
    if(err) throw err;
    displayProducts();
    // startShopping();
});

function displayProducts() {
    var table = new cliTable({
    head: ['ID', 'Product Name', 'Department Name', 'Price'], 
    colWidths: [5, 20, 20, 10]
    });
    table.push(
        ['1', 'Bamazon Echo', 'Electronics', '$180'],
        ['2', 'Bamazon Kindle', 'Electronics', '$100' ],
        ['3', 'How to be an Awesome JavaScript Developer', 'Books', '$25' ],
        ['4', 'Star Wars: Episodes IV-VI', 'Movies & TV', '$60' ],
        ['5', 'Garden Gnome', 'Home & Garden', '$35' ],
        ['6', 'Bananas', 'Food & Grocery', '$4' ],
        ['7', 'Creedance Clearwater Revival box set', 'Music', '$80' ],
        ['8', 'Basketball', 'Recreation', '$12' ],
        ['9', 'Motor oil', 'Automotive', '$5' ],
        ['10', 'Parks and Recreation DVD series', 'Movies & TV', '$50' ]
    );
    console.log(table.toString());
}

// function startShopping() {
//     inquirer.prompt ({
//         name: "selectId",
//         type: "input",
//         message: "What would you like to buy?",
//         choices: ["Bamazon Echo", "Bamazon Kindle", ]
//     } , {
//         name: "quantity",
//         type: "input",
//         message: "How many would you like to buy?"
//     }).then(function(answer) {
//         switch (answer.selectId) {
//             case "Bamazon Echo", "Electronics":
//                 buyEcho();
//                 break;
//             case "Bamazon Kindle":
//                 buyKindle();
//                 break;
//             case "How to be an Awesome JavaScript Developer":
//                 buyJsBook();
//                 break;
//             case "Star Wars: Episodes IV-VI":
//                 buyStarWars();
//                 break;
//             case "Garden Gnome":
//                 buyGnome();
//                 break;
//             case "Bananas":
//                 buyBananas();
//                 break;
//             case "Creedance Clearwater Revival box set":
//                 buyCcr();
//                 break;
//             case "Basketball":
//                 buyBasketball();
//                 break;
//             case "Motor oil":
//                 buyOil();
//                 break;
//             case "Parks and Recreation DVD series":
//                 buyParksRec();
//                 break;
//         }
//     });
// }

// function buyEcho() {
//     var query = "SELECT item_id FROM products";
//     connection.query(query, function(err, res) {
//         for (var i = 0; i < res.length; i++) {
//             console.log(res[i].item_id);
//         }
//     });
// }

// function buyKindle() {

// }

// function buyJsBook() {
    
// }

// function buyStarWars() {
    
// }

// function buyGnome() {
    
// }

// function buyBananas() {
    
// }

// function buyCcr() {
    
// }

// function buyBasketball() {
    
// }

// function buyOil() {
    
// }
















