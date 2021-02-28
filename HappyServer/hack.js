(function() {
	"use strict";
	
	window.addEventListener("load", initialize);
	
	function initialize() {
		$("loginToAccount").addEventListener("click", hack);
		
	}
	
	async function hack(){
		var response = await login("hayden", "123456");
		if(response == 'success'){
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