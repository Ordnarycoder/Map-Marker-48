// Initialize the map and set its initial view with [latitude, longitude] and zoom level
var map = L.map('map').setView([51.505, -0.09], 13);

// Add OpenStreetMap tiles to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

// Add a marker (pointer) at the specified coordinates
var marker = L.marker([51.505, -0.09]).addTo(map);

// Bind a popup to the marker with a simple message
marker.bindPopup("<b>Hello devs!</b><br>I am just a marker .").openPopup();
