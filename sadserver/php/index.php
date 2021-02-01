<?php
/*
 Hayden Flagg
 1/8/2021
 CS 481
*/
 function getdb() {
   $host = 'localhost';
   $port = '8889';
   $user = 'root';
   $password = 'root';
   $dbname = 'store';
   $ds = "mysql:host={$host}:{$port};dbname={$dbname};charset=utf8";

    try {
       $db = new PDO($ds, $user, $password);
       $db->setAttribute(PDO::ATTR_ERRMODE,
                         PDO::ERRMODE_EXCEPTION);
       return $db;
     }

     catch (PDOException $ex) {
       print ("There is a problem with you data base.");
     }
}

$dbs = getdb();
header("Content-type: text/plain");
if (isset($_GET["username"]) && isset($_GET["password"])) {
	$user = $dbs->query("SELECT * FROM USERS WHERE username=$_GET["username"] AND password=$_GET["password"]");
	
} else if (isset($_GET["items"])) {
	$items = $dbs->query("SELECT * FROM Items");
	foreach($item as $row) {
		echo("My name is {$row["id"]}, I am {$row["name"]}, and my major is {$row["price"]}. \n");
   	}
}  else {
 	header("HTTP/1.1 400 Invalid Request");
   	echo("Error: Please check your parameters.");
}
?>