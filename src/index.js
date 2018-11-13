console.log('hello');
const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker')

mapboxgl.accessToken = "pk.eyJ1IjoiY2hpbGx5Y2hlbGxvIiwiYSI6ImNqb2c4Y29rZjBjZmszcHBoeDk4andxa2oifQ.v2tfKOPNwJqF2ir5utTCIg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


// var marker = new mapboxgl.Marker()
//   .setLngLat([-74.009151, 40.705086])
//   .addTo(map)

//   buildMarker('activity', [70, 40])

buildMarker('hotels', [-74, 41], map)