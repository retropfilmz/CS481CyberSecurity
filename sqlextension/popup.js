'use strict';

function dropdownInject(){
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        console.log(tabs[0].id);
        chrome.tabs.sendMessage(tabs[0].id, {"message": "inject_to_dropdowns"});
    });
}

function tfToInject(){
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        console.log(tabs[0].id);
        chrome.tabs.sendMessage(tabs[0].id, {"message": "textfield_to_inject"});
    });
}

function identifyTable(){
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        console.log(tabs[0].id);
        chrome.tabs.sendMessage(tabs[0].id, {"message": "identify_table"});
    });
}

function customScriptBox(){
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        console.log(tabs[0].id);
        chrome.tabs.sendMessage(tabs[0].id, {"message": "custom_script_box"});
    });
}

function destruction(){
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        console.log(tabs[0].id);
        chrome.tabs.sendMessage(tabs[0].id, {"message": "destruction"});
    });
}

document.getElementById('dropdownInject').addEventListener('click', dropdownInject);
document.getElementById('tfToInject').addEventListener('click', tfToInject);
document.getElementById('identifyTable').addEventListener('click', identifyTable);
document.getElementById('customScriptBox').addEventListener('click', customScriptBox);
document.getElementById('destruction').addEventListener('click', destruction);
