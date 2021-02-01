(function() {
  "use strict";

  window.addEventListener("load", initialize);

  function initialize() {
   getItems();
  }


  function getItems() {
    fetch("index.php?items=all")
        .then(checkStatus)
        .then(JSON.parse)
	.then(show)
        .catch();
  }

  function show(items) {
    for (let i = 0; i < items.length; i++) {
	let newDiv = document.createElement('div');
        newDiv.innerHTML = events[i].Name + ": " + events[i].Price;
    }
  }



  /* ------------------------------ Helper Functions ------------------------------ */
  // shown in lectures and provided on the slides.

  /**
 * Helper function to return the response's result text if successful, otherwise
 * returns the rejected Promise result with an error status and corresponding text
 * @param {object} response - response to check for success/error
 * @returns {object} - valid result text if response was successful, otherwise rejected
 *                     Promise result
 */
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


  /**
  * returns an html item with the given id
  *
  * @param {string} id - the id name of the desired item
  * @returns {object} the item with given id
  */
  function $(id) {
    return document.getElementById(id);
  }
})();