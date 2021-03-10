<?php include('server.php') ?>

<html>

<head>
  <title>SadServer:Inventory</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/style3.css">

<body>
  <div class="container">
    <div class="menu">
      <ul>
        <li class="logo"><img src="/resources/blackhat.png"></li>
        <li id="accinfo">Account Info</li>
        <li id='grlist'>Grocery List</li>
        <li class='active'>Inventory</li>
        <li>Log Out</li>
      </ul>
    </div>
    <div class="banner">
      <div class="info-text">
        <h1>Search our inventory here</h1>
        <div class="info-container">

        <form action="/inventory.php">
          <label for="category">Pick a category</label>
          <select name="categories" id="category">
            <option value="frozen">Frozen</option>
            <option value="produce">Produce</option>
            <option value="grocery">Grocery</option>
          </select>
          <br>
          <label for="availability">Choose Availability</label>
          <select name="availability" id="availability">
            <option value="1">Available</option>
            <option value="2">Out of Stock</option>
          </select>
          <br>
          <input type="submit" value="Submit">
        </form> 
        <br><br>
        <table style="width:100%" >

        <!-- Fill in Items table -->
        <?php
        
        // Grab variables from URI
        $cat = @htmlspecialchars($_GET['categories']);
        $aval = @htmlspecialchars($_GET['availability']);

        // Query the server
        $query = "Select * FROM Items WHERE category = '$cat' AND availability = '$aval' ";
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
  document.getElementById('grlist').addEventListener('click', function(){
    document.location.href = '/grocerylist.php';
  });
  document.getElementById('accinfo').addEventListener('click', function(){
    document.location.href = '/accountinfo.php';
  });
</script>

</head>

</html>
