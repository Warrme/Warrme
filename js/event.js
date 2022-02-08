// JavaScript Document
var el;

function charCount(e) {
	var textEntered, charDisplay, counter, lastkey;
	textEntered = document.getElementById('bigText').value;
	charDisplay = document.getElementById('charactersLeft');
	counter = (180 - (textEntered.length));
	charDisplay.textContent = counter;
	
	lastkey = document.getElementById('lastkey');
	lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode;
}
el = document.getElementById('bigText');
el.addEventListener('keypress', charCount, false);

