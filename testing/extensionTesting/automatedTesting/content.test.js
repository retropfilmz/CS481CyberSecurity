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