//Code to be tested
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


//Variable to select test  
var dropdowncount = document.getElementsByTagName('select');

//Test 1 (With dropdown)
if (dropdowncount.length > 0){
    dropdownInject();
    var optionsInPage = document.getElementsByTagName('option');
    var injectExists = false;
    for (var i = 0; i < optionsInPage.length; i++){
        if (optionsInPage[i].innerHTML == 'Inject'){
            injectExists = true;
        }
    }
    if (injectExists){
        console.log("Injection is in page, test successful");
    }
}

//Test 2 (No dropdown)
if (dropdowncount.length == 0){
    dropdownInject();
    console.log("If alert was displayed that there are no dropdowns, test successful");
}
