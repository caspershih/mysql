DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price VARCHAR (100) NOT NULL,
    stock_quantity VARCHAR(100) NOT NULL,
    PRIMARY KEY (item_id)
);

SELECT * FROM bamazon.products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
Values ("Mug", "Housing", "5", "100"),
("Sunflower Seeds", "Garden", "7", "200"),
("Soap", "Bathroom", "3", "250"),
("Battleship", "Game", "15", "50");