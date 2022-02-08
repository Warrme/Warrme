// JavaScript Document
var table = 3;
var operator = 'addition';
var i = 1;
var msg = 'Here is the loop: <br />';

if (operator === 'addition') {
	while (i < 11) {
		msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
		i++;
	}
} 

var el = document.getElementById('loop');
el.innerHTML = msg;