DROP DATABASE IF EXISTS store;
CREATE DATABASE store;
USE store;

DROP TABLE IF EXISTS Users;
CREATE TABLE Users(
  username     VARCHAR(256) NOT NULL PRIMARY KEY,
  password     VARCHAR(256) NOT NULL,
  money        DOUBLE
);

DROP TABLE IF EXISTS Items;
CREATE TABLE Items(
  id           INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name         VARCHAR(256),
  price        DOUBLE
);

INSERT INTO Users (username, password, money) VALUES ("user 1", "1234", 10.00);
INSERT INTO Users (username, password, money) VALUES ("user 2", "abcd", 10.00);

INSERT INTO Users (id, name, price) VALUES (1, "pizza", 3.00);
INSERT INTO Users (id, name, price) VALUES (2, "ice cream", 3.00);
INSERT INTO Users (id, name, price) VALUES (3, "oranges", 3.00);