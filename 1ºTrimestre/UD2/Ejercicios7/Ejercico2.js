// Inicializar plataforma de Here Maps con API Key
var platform = new H.service.Platform({ apikey: 'TU_API_KEY' });
var maptypes = platform.createDefaultLayers();

// Coordenadas del Instituto Francisco Ayala en Granada
var latFranciscoAyala = 37.1952;
var lngFranciscoAyala = -3.6246;

// Crear mapa centrado en el Instituto Francisco Ayala
var map = new H.Map(document.getElementById('map'), maptypes.vector.normal.map, {
    zoom: 14, center: { lat: latFranciscoAyala, lng: lngFranciscoAyala }
});

// Añadir marcador en la ubicación del Instituto Francisco Ayala
var marker = new H.map.Marker({ lat: latFranciscoAyala, lng: lngFranciscoAyala });
map.addObject(marker);

// Geocodificación inversa (obtener dirección de Francisco Ayala)
var geocoder = platform.getGeocodingService();
geocoder.reverseGeocode({ prox: `${latFranciscoAyala},${lngFranciscoAyala}`, mode: 'retrieveAddresses', maxresults: 1 },
function(result) {
    var direccion = result.Response.View[0].Result[0].Location.Address.Label;
    alert('Dirección del Instituto Francisco Ayala: ' + direccion);
});
