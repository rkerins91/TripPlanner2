const mapboxgl = require("mapbox-gl");



const buildMarker = function(type, coords, map) {
  // Your Code Here
  const iconURLs = {
    hotels: "url(http://i.imgur.com/D9574Cu.png)",
    restaurants: "url(http://i.imgur.com/cqR6pUI.png)",
    activities: "url(http://i.imgur.com/WbMOfMl.png)"
  };
  let markerDiv = document.createElement('div')
  markerDiv.style.width = '25px';
  markerDiv.style.height = '25px';
  markerDiv.style.backgroundImage = iconURLs[type];
  new mapboxgl.Marker(markerDiv)
  .setLngLat(coords)
  .addTo(map)
};

module.exports = buildMarker