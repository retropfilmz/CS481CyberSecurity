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

function loginPA(){
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        console.log(tabs[0].id);
        chrome.tabs.sendMessage(tabs[0].id, {"message": "loginPA"});
    });
}

function accinfoUID(){
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        console.log(tabs[0].id);
        chrome.tabs.sendMessage(tabs[0].id, {"message": "accinfoUID"});
    });
}

function accinfoTCU(){
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        console.log(tabs[0].id);
        chrome.tabs.sendMessage(tabs[0].id, {"message": "accinfoTCU"});
    });
}

function groceryDump(){
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        console.log(tabs[0].id);
        chrome.tabs.sendMessage(tabs[0].id, {"message": "groceryDump"});
    });
}

function inventoryMC(){
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        console.log(tabs[0].id);
        chrome.tabs.sendMessage(tabs[0].id, {"message": "inventoryMC"});
    });
}

document.getElementById('dropdownInject').addEventListener('click', dropdownInject);
document.getElementById('tfToInject').addEventListener('click', tfToInject);
document.getElementById('loginPA').addEventListener('click', loginPA);
document.getElementById('accinfoUID').addEventListener('click', accinfoUID);
document.getElementById('accinfoTCU').addEventListener('click', accinfoTCU);
document.getElementById('groceryDump').addEventListener('click', groceryDump);
document.getElementById('inventoryMC').addEventListener('click', inventoryMC);
