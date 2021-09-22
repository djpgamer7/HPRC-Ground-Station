const NotificationSystem = require('./api/NotificationSystem');
const Loader = require('google-maps');

let markers = [];

let map;

function initMap() {
    const wpi = {
        lat: 42.270758917,
        lng: -71.8044067824
    };

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: wpi,
    });

    createMarker(wpi, "WPI");
};

const createMarker = (location, markerName) => {
    let m = new google.maps.Marker({
        position: location,
        map: map,
        title: markerName
    });

    markers.push(m);

    m.addListener('click', () => {
        NotificationSystem.sendNotification("Marker System", `Marker was deleted!`);
        
        let matches = markers.find(e => e === m);
        if(matches == undefined) {
            return;
        } else {
            m.setMap(null);
            const index = markers.findIndex(e => e === m);
            markers.slice(index, index);
        }
        
    });
};