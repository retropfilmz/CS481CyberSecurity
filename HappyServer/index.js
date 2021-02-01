/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
    	"use strict";
    
    	window.addEventListener("load", initialize);
    
    
    	function initialize() {
		setTimeout(() => {getItems().then(fillStore);}, 2000);
    	}

    	function fillStore(items) {
		for (let i = 0; i < items.length; i++) {
			let newDiv = document.createElement('div');
                	newDiv.innerHTML = events[i].Name + ": " + events[i].Price;
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

