window.init = getMyLocation;

function getMyLocation () {
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(displayLocation);
	} else {
		alert ("Oops, no geolocation support");
	}
	
	function displayLocation(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		var div = getElementById("location");
		div.innerHTML = "You are at latitude: " + latitude + ", Longitude: " + longitude;
	}
};