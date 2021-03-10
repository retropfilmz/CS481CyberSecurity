# A Chrome extension that will aid in SQL Injection.

## Dropdown Injection
Generic method to target all dropdown menus and replace entries with the option that allows for sql injection.
Can be used on the Inventory page to show contents of all categories in Item table.

## Textfield Injection
Generic method to target all text fields and insert values for sql injection.
Can be used on the Login or Grocery List page to get all items.

## Login password attack
Targets the password input field and inserts query injection. 
To be used on the login.php file of the sadserver.
When logging in after using this, all usernames and emails will be listed on the redirect to index.php

## Account Info UserID Spoof
Targets the user ID number on the Account Info page.
Since the query references the user's ID, we can inject to get more than just our specified items.
When submitting a query after running this command you see info for all user IDs.

## Account Info Table Change - Users
Targets the dropdown menu on the Account Info page.
Adding an option to the dropdown allows us to view tables we are not supposed to view.
After executing this the Users table becomes part of the dropdown menu.
Using this alone will show you all of your account information.
Using this in combination with Account Info UserID Spoof will show you all user data.

##Grocery List Dump
Targets the search text field on the Grocery List page.
This query uses the input to find items that match.
Submitting a query after running this command will dump the entire list of items.

##Inventory Multiple Categories
Targets the dropdown on the Inventory page.
Allows for a feature that should really be implemented by a real website but could possibly be used maliciously.
This example adds the option for both Frozen and Produce to be queried at the same time.
