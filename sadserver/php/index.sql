DROP TABLE IF EXISTS Items;
CREATE TABLE Items(
  id           INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name         VARCHAR(256),
  price        DOUBLE,
  category	   VARCHAR(256),
  availability INT
);


INSERT INTO Items (id, name, price, category, availability) VALUES (1, "pizza", 3.00, "frozen", 1);
INSERT INTO Items (id, name, price, category, availability) VALUES (2, "ice cream", 3.00, "frozen", 2);
INSERT INTO Items (id, name, price, category, availability) VALUES (3, "oranges", 3.00, "produce", 0);
INSERT INTO Items (id, name, price, category, availability) VALUES (4, "pear", 2.00, "produce", 1);
INSERT INTO Items (id, name, price, category, availability) VALUES (5, "apple", 3.00, "produce", 1);
INSERT INTO Items (id, name, price, category, availability) VALUES (6, "banana", 2.00, "produce", 2);
INSERT INTO Items (id, name, price, category, availability) VALUES (7, "watermellon", 6.00, "produce", 0);