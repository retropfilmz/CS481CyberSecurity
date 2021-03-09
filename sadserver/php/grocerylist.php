<?php
$host = 'localhost';
$dbuser = 'devuser';
$dbpassword = 'devpass';
$dbid = 'test_db';

// connect to the database
$db = mysqli_connect ($host,$dbuser,$dbpassword,$dbid);
?>

<html>

<head>
  <title>SadServer:Grocery List</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/style3.css">

<body>
  <div class="container">
    <div class="menu">
      <ul>
        <li class="logo"><img src="/resources/blackhat.png"></li>
        <li id='accinfo'>Account Info</li>
        <li class="active">Grocery List</li>
        <li>Log Out</li>
      </ul>
    </div>
    <div class="banner">
      <div class="info-text">
        <h1>Search for an item to add to your list!</h1>
        <div class="info-container">

        <form action="/grocerylist.php">
          <label for="searchinfo">Item Name:</label>
          <input type="text" id="searchinfo" name="searchinfo"> 
          <br>
          <input type="submit" value="Submit">
        </form> 
        <br><br>
        <table style="width:100%" >

        <!-- Fill in Items table -->
        <?php
        
        // Grab variables from URI
        $search = @htmlspecialchars($_GET['searchinfo']);

        // Query the server
        $query = "Select * FROM Items WHERE name = '$search' ";
        $result = mysqli_query($db, $query);

        // Print results to a table
        print "<tr><td> Item Number </td><td> Item Name </td><td> Price </td><td> </td></tr>";
        while($row = mysqli_fetch_array($result)){
          echo "<tr><td>" . $row['id'] . "</td><td>" . $row['name'] . "</td><td>" . $row['price'] . "</td><td>" . "</td></tr>";
        }    

        ?>

        </table>
        </div>
      </div>
    </div>
</body>

<script>
  document.getElementById('accinfo').addEventListener('click', function(){
    document.location.href = '/accountinfo.php';
  });
</script>

</head>

</html>
