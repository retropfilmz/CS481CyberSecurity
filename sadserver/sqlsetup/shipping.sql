CREATE TABLE `Shipping` (
  ShipID INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  UserID INT(11) NOT NULL,
  CartID INT(11) NOT NULL,
  Address NVARCHAR(100) NOT NULL
);

INSERT INTO Shipping (UserID, CartID, Address) VALUES (1, 1, "1304 Hamilton Ave. Yakima, WA 98902");
INSERT INTO Shipping (UserID, CartID, Address) VALUES (2, 2, "123 Big Wok Way. Beverly Hills, CA 90210");
INSERT INTO Shipping (UserID, CartID, Address) VALUES (4, 3, "8946 Hamilton Street. Seattle, WA 98927");
INSERT INTO Shipping (UserID, CartID, Address) VALUES (6, 4, "1486 Wildcat Way. Ellensburg, WA 98926");
INSERT INTO Shipping (UserID, CartID, Address) VALUES (2, 5, "123 Big Wok Way. Beverly Hills, CA 90210");