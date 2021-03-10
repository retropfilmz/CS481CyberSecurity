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
	var userCart = null;
	var Shippings = null;
    
    
    	function initialize() {
		$("cart").addEventListener("click", function() {getUserCart().then(fillCart);});
		setTimeout(() => {getItems().then(fillStore);}, 2000);
		setTimeout(() => {getUserInfo().then(fillUser);}, 2000);
		
    	}

	function fillStore(items) {
		groceries = items;
	}

	function fillShipping(items) {
		Shippings = items;
		showShippings();
	}


	function fillUser(info) {
		userInfo = info;
		showUserInfo();
		$("shipments").addEventListener("click", function() {getShipping(userInfo[0].Name).then(fillShipping);});
		//getShipping(userInfo[0].Name).then(fillShipping);
	}

	function showUserInfo() {
		for (let i = 0; i < userInfo.length; i++) {
			let newDiv = document.createElement('div');
                	newDiv.innerHTML = userInfo[i].Name + ": $" + userInfo[i].Money;
			$("info-container").appendChild(newDiv);
		}
	}

	function fillCart(cart) {
		userCart = cart;
		showUserCart();
	}

	function showUserCart() {
		var total = 0;
		$("info-container").innerHTML = "";
		let newDiv5 = document.createElement('div');
                newDiv5.innerHTML = userInfo[0].Name + ": $" + userInfo[0].Money;
		$("info-container").appendChild(newDiv5);
		let newDiv = document.createElement('div');
		let p = document.createElement('p');
		p.innerText = "SHOPPING CART";
		$("info-container").appendChild(p);
		for (let i = 0; i < userCart.length; i++) {
			let newDiv2 = document.createElement('div');
			var item = getItemByID(userCart[i].ID);
                	newDiv2.innerHTML = "(" + userCart[i].QT + ") " + item.Name + ": $" + (userCart[i].QT * item.Price);
			newDiv.appendChild(newDiv2);
			total += userCart[i].QT * item.Price;
		}
		$("info-container").appendChild(newDiv);
		let p2 = document.createElement('p');
		p2.innerText = "TOTAL COST: $" + total;
		$("info-container").appendChild(p2);
		
	}

	function showShippings() {
		$("info-container").innerHTML = "";
		let newDiv = document.createElement('div');
                newDiv.innerHTML = userInfo[0].Name + ": $" + userInfo[0].Money;
		$("info-container").appendChild(newDiv);
		let newDiv2 = document.createElement('div');
		let p = document.createElement('p');
		p.innerText = "SHIPMENTS";
		$("info-container").appendChild(p);
		console.log(Shippings);
		for (let i = 0; i < Shippings.length; i++) {
			let p2 = document.createElement('p');
                	p2.innerText = "You have has a package going to " + Shippings[i].Address;
			newDiv2.appendChild(p2);
		}
		$("info-container").appendChild(newDiv2);
		
	}

	function getItemByID(id) {
		for (var i = 0; i < groceries.length; i++) {
			if (groceries[i].ID == id) {
				return groceries[i];
			} 
		}
		return null;
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

