-- Database Queries

-- Find all customers with postal code 1010

-- [SOLUTION] - SELECT * FROM Customers WHERE PostalCode = 1010;

-- Find the phone number for the supplier with the id 11

-- [SOLUTION] - SELECT Phone FROM Suppliers WHERE SupplierID = 11;

-- List first 10 orders placed, sorted descending by the order date

-- [SOLUTION] - SELECT * FROM Orders ORDER BY OrderDate DESC LIMIT 10;

-- Find all customers that live in London, Madrid, or Brazil

-- [SOLUTION] - SELECT * FROM Customers WHERE City = "Madrid" OR City = "London" OR Country = "Brazil";

-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"

-- [SOLUTION] - INSERT INTO Customers (ContactName, Address, City, PostalCode, Country) VALUES ("Bilbo Baggins", "1 Hobbit-Hole, Bag End", "The Shire", "111", "Middle Earth");

-- Update Bilbo Baggins record so that the postal code changes to "11122"

-- [SOLUTION] - UPDATE Customers SET PostalCode = "11122" WHERE ContactName = "Bilbo Baggins";

-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted


-- [SOLUTION] - SELECT DISTINCT City FROM Customers;

-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name

-- [SOLUTION] - SELECT * FROM Suppliers WHERE length(SupplierName) > 20;