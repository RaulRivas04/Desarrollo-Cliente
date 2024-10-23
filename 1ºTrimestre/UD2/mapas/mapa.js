var map = L.map('map').setView([51.505, -0.09], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function initMap(lat, lon) {
    map.setView([lat, lon], 13);

    const marker = L.marker([lat, lon]).addTo(map);
    
}

function getLocation() {
    if (navigator.geolocation) {
      
        navigator.geolocation.getCurrentPosition(
            (position) => {
                
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                
                initMap(lat, lon);
            },
            (error) => {
                
                let errorMessage = '';
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage = "User denied the request for Geolocation.";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMessage = "Location information is unavailable.";
                        break;
                    case error.TIMEOUT:
                        errorMessage = "The request to get user location timed out.";
                        break;
                    case error.UNKNOWN_ERROR:
                        errorMessage = "An unknown error occurred.";
                        break;
                }
                alert(errorMessage);
            }
        );
    } else {
        
        alert("Geolocation no está disponible");
    }
}


window.onload = getLocation;