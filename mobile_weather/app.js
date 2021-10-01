// Current location API.
var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x = position.coords.latitude;
    y = position.coords.longitude;

    let map = L.map('mapid').setView([x, y], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([x, y]).addTo(map)
        .bindPopup('Current Location' + `</br>` + 'Latitude = ' + lat + `</br>` + 'Longitude = ' + long)
        .openPopup();
}

// API used for tracking the IP Address
function mapUpdate() {
    var ip = "8.8.8.8";
    var api_key = '#';
    let jsObject = {};
    let lat;
    let long;
    let country;
    let region;
    let city;
    let provider;
    $(function () {
        $.ajax({
            url: "https://geo.ipify.org/api/v1",
            data: {
                apiKey: api_key,
                ipAddress: ip
            },
            success: function (data) {
                jsObject = data;
                lat = jsObject.location.lat;
                long = jsObject.location.lng;
                country = jsObject.location.country;
                region = jsObject.location.region;
                city = jsObject.location.city;
                provider = jsObject.location.isp;

                // API used to populate the map on the index.html file.

                let map = L.map('mapid').setView([lat, long], 13);

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                L.marker([lat, long]).addTo(map)
                    .bindPopup('Current Location' + `</br>` + 'Latitude = ' + lat + `</br>` + 'Longitude = ' + long)
                    .openPopup();
            }
        });
    });
};