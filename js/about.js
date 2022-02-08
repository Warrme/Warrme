// JavaScript Document
(function()	{
	
	var tacos = {
		name: 'Tacos',
		price: 8,
		free: 'Free',
	
	}

var tacosName, price, freePrice;
	
tacosName = document.getElementById('tacosName');
price = document.getElementById('price');
freePrice = document.getElementById('freePrice');
	
tacosName.textContent = tacos.name;
price.textContent = '$' + tacos.price.toFixed(2);
freePrice.textContent = tacos.free;

var expiryMsg;
var today;
var elEnds;
	
function offerExpires(today) {
	var weekFromToday, day, date, month, year, dayNames, monthNames;
	
	weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
	
	dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
	monthNames = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	
	day = dayNames[weekFromToday.getDay()];
	date = weekFromToday.getDate();
	month = monthNames[weekFromToday.getMonth()];
	year = weekFromToday.getFullYear();
	
	expiryMsg = 'Offer expires next ';
	expiryMsg += day + '<br />(' + date + ' ' + month + ' ' + year + ')';
	return expiryMsg;
}
	
today = new Date();
elEnds = document.getElementById('offerEnds');
elEnds.innerHTML = offerExpires(today);



}());




