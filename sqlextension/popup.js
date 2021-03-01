'use strict';

function dropdownInject(){
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        console.log(tabs[0].id);
        chrome.tabs.sendMessage(tabs[0].id, {"message": "inject_to_dropdowns"});
    });
}

document.getElementById('dropdownInject').addEventListener('click', dropdownInject);
