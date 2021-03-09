CREATE TABLE `ShoppingCart`(
    UserID INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    CartID INT(11) NOT NULL,
    Cart INT(11) NOT NULL,
    total DOUBLE NOT NULL
); 

CREATE TABLE `Cart`(
    Cart INT(11) NOT NULL,
    ItemID INT(11) NOT NULL,
    quantity INT(99) NOT NULL
);

