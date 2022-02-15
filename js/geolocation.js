var elMap = document.getElementById('userLocation')
var msg = 'We apologize, we were unable to acquire your location.';

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(success, fail);
	elMap.textContent = 'Checking location. . .';
}
else {
	elMap.textContent = msg;

}

function success(position) {
	msg = '<h3>Longitude:<br>'
	msg += position.coords.longitude + '</h3>';
	msg += '<h3>Latitude:<br>'
	msg += position.coords.latitude + '</h3>';
	elMap.innerHTML = msg;
}

function fail(msg) {
	elMap.textContent = msg;
	console.log(msg.code);
}
