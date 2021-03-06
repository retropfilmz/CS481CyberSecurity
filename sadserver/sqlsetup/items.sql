DROP TABLE IF EXISTS Items;
CREATE TABLE Items(
  ItemID           INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name         VARCHAR(256),
  price        DOUBLE,
  category	   VARCHAR(256),
  availability INT
);


INSERT INTO Items (ItemID, name, price, category, availability) VALUES (1, "pizza", 4.25, "frozen", 1);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (2, "ice cream", 3.00, "frozen", 2);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (3, "oranges", 4.00, "produce", 0);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (4, "pear", 2.00, "produce", 1);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (5, "apple", 0.99, "produce", 1);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (6, "banana", 3.00, "produce", 2);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (7, "watermellon", 6.00, "produce", 0);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (8, "eggs", 2.00, "grocery", 1);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (9, "lays chips", 4.00, "grocery", 1);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (10, "oreos", 2.99, "grocery", 1);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (12, "chips ahoy", 2.99, "grocery", 0);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (13, "chicken", 7.99, "frozen", 1);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (14, "milk", 2.99, "dairy", 1);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (15, "hamburger", 8.99, "frozen", 1);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (16, "lemonade", 2.99, "grocery", 2);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (17, "lasagna", 8.99, "frozen", 0);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (18, "ice cream", 3.99, "frozen", 1);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (19, "lettuce", 2.99, "produce", 1);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (20, "fireball", 13.99, "beverages", 0);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (21, "olive", 1.99, "produce", 0);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (22, "flour", 5.99, "grocery", 1);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (23, "ramen", .99, "grocery", 2);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (24, "cashews", 3.99, "grocery", 2);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (26, "cereal", 4.00, "grocery", 1);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (27, "kit-kat", 1.50, "grocery", 1);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (28, "grapes", 6.00, "produce", 2);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (29, "bread", 2.00, "bakery", 0);
INSERT INTO Items (ItemID, name, price, category, availability) VALUES (30, "cheese", 2.00, "deli", 0);