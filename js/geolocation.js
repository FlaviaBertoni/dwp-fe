function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }else {
        alert("Seu browser não suporta a função de geo-referenciamento.");
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=600x200&sensor=false";
    document.getElementById("geolocation").innerHTML = "<img src='"+img_url+"'>";
	$("#geolocation").addClass("thumbnail");
}

$(document).ready(getLocation());