window.onload = getMyLocation;

function getMyLocation () {
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(displayLocation, displayError);
	} else {
		alert ("Oops, no geolocation support");
	}
	
	function displayLocation(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		var div = document.getElementById("location");
		div.innerHTML = "You are at latitude: " + latitude + ", longitude: " + longitude;
	}
	
	function displayError (error){
		var errorTypes = {
			0: "Unknown error",
			1: "Permission denied by user",
			2: "Position is not available",
			3: "Request timed out"
		};
		var errorMessage = errorTypes[error.code];
		console.log(error.code, " - ", error.message)
		if (error.code == 1 || error.code == 2){
			errorMessage = errorMessage + " - " + error.message;
		};
		var div = document.getElementById("location");
		div.innerHTML = errorMessage;
	}
};