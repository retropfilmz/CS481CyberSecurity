<?php include('server.php') ?>

<html>

<head>
  <title>SadServer:Account info</title>
  <link rel="stylesheet" href="/css/style3.css">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">

<body>
  <div class="container">
    <div class="menu">
      <ul>
        <li class="logo"><img src="/resources/blackhat.png"></li>
        <li class="active">Account Info</li>
        <li id='grlist'>Grocery List</li>
        <li id='inv'>Inventory</li>

        <li>Log Out</li>
      </ul>
    </div>
    <div class="banner">
      <div class="info-text">
        <h1>This is all your private account information :D</h1>
        <div class="info-container">

        <?php
        echo "Welcome ";
        print_r($_SESSION['user'][1]);
        ?>

        <form action="/accountinfo.php">
        <label for="uid">Your user ID is </label>
            <input type="radio" style='display:none;' name="userID" id="uid" value="<?php echo $_SESSION['user'][0] ?>" checked>
          <?php
            echo  $_SESSION['user'][0];
          ?>
          <br>
          <label for="category">Pick a category</label>
          <select name="categories" id="category">
            <option value="Shipping">Shipments</option>
            <option value="ShoppingCart">Orders</option>
          </select>
          <br>
          <input type="submit" value="Submit">
        </form> 
        <br>
        <table style="width:100%" >

        <!-- Fill in Items table -->
        <?php
        
        // Grab variables from URI
        $cat = @htmlspecialchars($_GET['categories']);
        $uuid = @htmlspecialchars($_GET['userID']);

        // Query the server

        $query = "Select * FROM $cat WHERE UserID = '$uuid'";
        $result = mysqli_query($db, $query);

        $colquery = "Select COLUMN_NAME from INFORMATION_SCHEMA.COLUMNS where TABLE_NAME= '$cat' ";
        $colresult = mysqli_query($db, $colquery);
        $colarray = array();
        for ($i = 0; $i < mysqli_num_rows($colresult); $i++){
          array_push($colarray, mysqli_fetch_array($colresult) );
        }

        // Print headers of table
        echo "<tr>";
        for ($i = 0; $i < count($colarray); $i++){
          echo "<td>" . $colarray[$i][0] . "</td>";
        }
        echo "</tr>";

        // Print results to a table
        while($row = mysqli_fetch_array($result)){
          echo "<tr>";
          for ($i = 0; $i < count($colarray); $i++){
            echo "<td>" . $row[$i] . "</td>";
          }
          echo "</tr>";
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
  document.getElementById('inv').addEventListener('click', function(){
    document.location.href = '/inventory.php';
  });
</script>

</head>

</html>
