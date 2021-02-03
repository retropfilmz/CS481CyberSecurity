//login.js
(function() {
	"use strict";
	
	window.addEventListener("load", initialize);
	
	function initialize() {
		$("signup").addEventListener("click", createAccount);
		
		
	}
	
	async function createAccount(){
		//grab data and set initial values
		console.log("hello");
		var username = $("username").value;
		var password1 = $("password1").value;
		var password2 = $("password2").value;
		var passwordCheck = 0;
		var usernameCheck = 0;

		//console.log(username);

		//check for passwords matching
		if (password1 === password2){
			passwordCheck = 1;
			var response = await createUser(username, password1);
			alert(response);
			//console.log(response);
		}
		
		//if passwords don't match, display passwords don't match
		if (passwordCheck == 0){
			alert("Passwords do not match");
		}
		
		//if username is not open, display username is already taken
		if (response == 'auth/email-already-in-use'){
			alert("Username is already taken")
		}
		
		//if both criteria is met, add to database, display account created successfully
		//[PLACEHOLDER for add to database]
		if (getCurrentUser() != null){
			//alert("Account has been created, please log in")
			window.location.href="index.html";
		}
		
		//switch back to login view to allow sign in
		
		return false;
	}	
	
	function testAlert(){
		alert("This button called the script");
	}
	

// ---------------------------------------------------------------------------
//HELPER FUCTIONS

    // Helper function to return the response's result text if successful, otherwise
    // returns the rejected Promise result with an error status and corresponding text
    function checkStatus(response) {
        const OK = 200;
        const ERROR = 300;
        let responseText = response.text();
        if (response.status >= OK && response.status < ERROR || response.status === 0) {
          return responseText;
        } else {
          return responseText.then(Promise.reject.bind(Promise));
        }
	}


    // returns an html item with the given id
    function $(id) {
        return document.getElementById(id);
    }	
	
})();