/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
    	"use strict";
    
    	window.addEventListener("load", initialize);

	var groceries = null;
	var userInfo = null;
    
    
    	function initialize() {
		setTimeout(() => {getUserInfo().then(fillUser);}, 2000);
		
    	}

	function fillUser(info) {
		userInfo = info;
		showUserInfo();
	}

	function showUserInfo() {
		for (let i = 0; i < userInfo.length; i++) {
			let newDiv = document.createElement('div');
                	newDiv.innerHTML = userInfo[i].Name + ": $" + userInfo[i].Money;
			$("info-container").appendChild(newDiv);
		}
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

