//login.js
(function() {
	"use strict";
	
	window.addEventListener("load", initialize);
	
	function initialize() {
		$("loginToAccount").addEventListener("click", loginToAccount);
		
	}
	
	async function loginToAccount(){
		//grab data
		var usernameToSubmit = $("username").value;
		var passwordToSubmit = $("password").value;
		console.log(1);
		
		//send username and password to database
		var response = await login(usernameToSubmit, passwordToSubmit);
		console.log(response);
		
		//if it does not match, display "invalid login"
		if(response == 'auth/wrong-password')
		{
			alert("Invalid Login");
		}
		
		//if login is successful, add token/cookie? and redirect to page
		if(response == 'success')
		{
			window.location.href="accountinfo.html";
		}
		
	}
	
	function testAlert(){
		var usernameToSubmit = $("username").value;
		var passwordToSubmit = $("password").value;
		console.log(usernameToSubmit + " " + passwordToSubmit);
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