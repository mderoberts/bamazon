-- CREATE DATABASE bamazonDB;

USE bamazonDB;

-- CREATE TABLE products (
--  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
--  product_name VARCHAR(50) NOT NULL,
--  department_name VARCHAR(50) NOT NULL,
--  price INTEGER(11) NOT NULL,
--  stock_quantity INTEGER(11) NOT NULL,
--  PRIMARY KEY (item_id)
-- )

-- ALTER TABLE products 
-- ADD prime_subscriptions INTEGER(11) AFTER stock_quantity;

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Bamazon Echo", "Electronics", 180, 32),
  ("Bamazon Kindle", "Electronics", 80, 100),
  ("How to be an Awesome JavaScript Developer", "Books", 25, 32),
  ("Star Wars: Episodes IV-VI", "Movies & TV", 60, 15),
  ("Garden Gnome", "Home & Garden", 35, 12),
  ("Bananas", "Food & Grocery", 4, 22),
  ("Creedance Clearwater Revival box set", "Music", 80, 30),
  ("Basketball", "Recreation", 12, 15),
  ("Motor oil", "Automotive", 5, 26),
  ("Parks and Recreation DVD series", "Movies & TV", 50, 14);
 
 SELECT * FROM products;

