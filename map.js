const Loader = require('google-maps');

function initMap() {
    const wpi = {
        lat: 42.270758917,
        lng: -71.8044067824
    };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: wpi,
    });
    const marker = new google.maps.Marker({
        position: wpi,
        map: map
    });
}