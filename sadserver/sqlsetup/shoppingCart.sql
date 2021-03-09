CREATE TABLE `ShoppingCart`(
    CartID INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    UserID INT(11) NOT NULL,
    Total DOUBLE NOT NULL
); 

INSERT INTO ShoppingCart (UserID, Total) VALUES (1, 32.59);
INSERT INTO ShoppingCart (UserID, Total) VALUES (2, 17.86);
INSERT INTO ShoppingCart (UserID, Total) VALUES (4, 345.59);
INSERT INTO ShoppingCart (UserID, Total) VALUES (6, 165.35);
INSERT INTO ShoppingCart (UserID, Total) VALUES (2, 15.64);