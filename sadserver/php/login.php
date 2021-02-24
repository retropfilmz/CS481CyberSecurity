<?php include('server.php') ?>
<!DOCTYPE html>
<html>

<head>
  <title>SadServer:Login</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/style.css">

<body>

  <div class="logincontainer">
    <img src="/resources/avatar.png" class="avatar">
    <h1>Login Here </h1>
	
    <form method="post" action="login.php">
  	<?php include('errors.php'); ?>
	
  	<div class="input-group">
  		<label>Username</label>
  		<input type="text" name="username" placeholder="Enter Username">
  	</div>
	  
	<div class="input-group">
  		<label>Password</label>
  		<input type="password" name="password" placeholder="Enter Password">
  	</div>
	  
    <div class="input-group">
  		<button type="submit" class="btn" name="login_user">Login</button>
  	</div>
	  
	  
      <a href="signup.php">Don't have an account?</a>
	  <br>
	  <a href="accountinfo.php">Placeholder to skip login mechanism</a>
	  
	  
	  
	  
    </form>
  </div>

</body>
</head>

</html>
