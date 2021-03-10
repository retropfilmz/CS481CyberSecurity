/**
 * @jest-environment jsdom
 */

test ('Test dropdown injection of 1=1', () => {
    document.body.innerHTML = 
        '<select>';

    const contentjs = require('./content.js');
    
    const list = document.getElementsByTagName('select');

    contentjs.dropdownInject();

    expect(list[0].innerHTML).toBe("<option value=\"\' or \'1 = 1\">Inject</option>");

});

test ('Test dropdown injection of 1=1 with no dropdown', () => {
    document.body.innerHTML = 
        '<span>';

    const contentjs = require('./content.js');

    contentjs.dropdownInject();
    
    const list = document.getElementsByTagName('select');

    expect(list.length).toBe(0);

});

test ('Test text field injection of 1=1', () => {
    document.body.innerHTML = 
        '<input id="tfid">';

    const contentjs = require('./content.js');

    contentjs.tfInject();
    
    const textf = document.getElementById('tfid');

    expect(textf.value).toBe("\' or \'1 = 1");

});

test ('Test inection into password text field', () => {
    document.body.innerHTML = 
        '<input id="password">';

    const contentjs = require('./content.js');

    contentjs.loginPA();
    
    const textf = document.getElementById('password');

    expect(textf.value).toBe("\' or \'1 = 1");

});

test ('Test inection into user id span', () => {
    document.body.innerHTML = 
        '<span id="uid">';

    const contentjs = require('./content.js');

    contentjs.accinfoUID();
    
    const spanid = document.getElementById('uid');

    expect(spanid.value).toBe("\' or \'1 = 1");

});

test ('Test manipulation of dropdown to add user table option', () => {
    document.body.innerHTML = 
        '<select id="category">';

    const contentjs = require('./content.js');

    contentjs.accinfoTCU();
    
    const selectmenu = document.getElementById('category');

    expect(selectmenu.innerHTML).toBe("<option value=\"users\">Users</option>");

});

test ('Test inection into search text field', () => {
    document.body.innerHTML = 
        '<input id="searchinfo">';

    const contentjs = require('./content.js');

    contentjs.groceryDump();
    
    const textf = document.getElementById('searchinfo');

    expect(textf.value).toBe("\' or \'1 = 1");

});

test ('Test manipulation of dropdown to add a combination option', () => {
    document.body.innerHTML = 
        '<select id="category">';

    const contentjs = require('./content.js');

    contentjs.inventoryMC();
    
    const selectmenu = document.getElementById('category');

    expect(selectmenu.innerHTML).toBe("<option value=\"frozen\' or category = \'produce\">Frozen and Produce</option>");

});
