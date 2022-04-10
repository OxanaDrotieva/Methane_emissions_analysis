// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the second tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Add radio buttons for GDP, methane emissions and emissions/GDP ratio data 
let emission = new L.LayerGroup();
let gdp = new L.LayerGroup();
let ratio = new L.LayerGroup();

let groupedOverlays = {
  "Countries": {
    "Methane Emission": emission,
    "GDP": gdp,
    "Metane Emission per Billion $ of GDP": ratio
}
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [40.7, -94.5],
	zoom: 3,
	layers: [streets, groupedOverlays.Countries['Methane Emission']]
});

// Create a base layer that holds all three maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets
};

var options = {
  // Make the "Counries" group exclusive (use radio inputs)
  exclusiveGroups: ["Countries"],
  // Show a checkbox next to non-exclusive group labels for toggling all
  groupCheckboxes: true
};

// Then we add a control to the map that will allow the user to change which
// layers are visible.
L.control.groupedLayers(baseMaps, groupedOverlays, options).addTo(map);

// Retrieve the GDP and emission GeoJSON data.
d3.json("../geojson.json").then(function(data) {
 // d3.json("https://methane-bucket.s3.amazonaws.com/geojson.json").then(function(data) {
  // data = "https://methane-bucket.s3.amazonaws.com/geojson.json"
  // Creating a GeoJSON layer with the retrieved GDP data.
  L.choropleth(data, {
    	// We turn each feature into a polygon on the map.
      valueProperty: function(feature){
        if ('GDP' in feature.properties){
            return feature.properties.GDP["2010"]         
        }
          return 0},
      scale: ['white', 'red'], // chroma.js scale - include as many as you like
	    steps: 15, // number of breaks or steps in range
	    mode: 'k', // q for quantile, e for equidistant, k for k-means
	    style: {
              color: '#000000', // border color
              weight: 2,
              fillOpacity: 0.8
	    },
     // We create a popup for each contry to display its name and GDP 
     //  after the marker has been created and styled.
      onEachFeature: function(feature, layer) {
        if ('GDP' in feature.properties && '2010' in feature.properties.GDP){
              layer.bindPopup("Country: " + feature.properties.name + "<br>GDP: " + feature.properties.GDP['2010']);}
    }
  }).addTo(gdp);

  // Then we add the GDP layer to our map.
  //gdp.addTo(map);

  // Creating a GeoJSON layer with the retrieved emission data.
  L.choropleth(data, {
    valueProperty: function(feature){
      if ('methane' in feature.properties){
        if('Total including LUCF' in feature.properties.methane){
          return feature.properties.methane["Total including LUCF"]["2010"]
        } 
      }
        return 0
      }, // which property in the features to use
      scale: ['white', 'red'], // chroma.js scale - include as many as you like
      steps: 15, // number of breaks or steps in range
      mode: 'k', // q for quantile, e for equidistant, k for k-means
      style: {
                color: '#000000', // border color
                weight: 2,
                fillOpacity: 0.8
  },
    onEachFeature: function(feature, layer) {
      if ('methane' in feature.properties && 'Total including LUCF' in feature.properties.methane){
        layer.bindPopup("Country: " + feature.properties.name + "<br>Methane Emission: " + feature.properties.methane['Total including LUCF']['2010']);
      }
  }
  }).addTo(emission);

  L.choropleth(data, {
    valueProperty: function(feature){
      if ('methane' in feature.properties && 'GDP' in feature.properties){
        if('Total including LUCF' in feature.properties.methane && '2010' in feature.properties.GDP){
          return feature.properties.methane["Total including LUCF"]["2010"]/feature.properties.GDP['2010']
        } 
      }
        return 0

      }, // which property in the features to use
      scale: ['white', 'red'], // chroma.js scale - include as many as you like
      steps: 15, // number of breaks or steps in range
      mode: 'k', // q for quantile, e for equidistant, k for k-means
      style: {
                color: '#000000', // border color
                weight: 2,
                fillOpacity: 0.8
  },
    onEachFeature: function(feature, layer) {
      if (('methane' in feature.properties && 'Total including LUCF' in feature.properties.methane) && ('GDP' in feature.properties && '2010' in feature.properties.GDP)){
        layer.bindPopup("Country: " + feature.properties.name + "<br>Methane Emission: " + feature.properties.methane['Total including LUCF']['2010'] + "<br>GDP: " + feature.properties.GDP['2010']);
      }
  }
  }).addTo(ratio);
  // Then we add the emission layer to our map.
  //emission.addTo(map);

  // Here we create a legend control object.
  var legend = L.control({ position: 'bottom' })
  // Add details for the legend
  legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend')
    var limits = [0, 15]
    var colors = ratio.options.colors
    var labels = ['Low',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','High']

    // Add min & max
    div.innerHTML = '<div class="labels"><div class="min">' + limits[0] + '</div> \
			<div class="max">' + limits[limits.length - 1] + '</div></div>'

    limits.forEach(function (limit, index) {
      labels.push('<li style="background-color: ' + colors[index] + '"></li>')
    })

    div.innerHTML += '<ul>' + labels.join('') + '</ul>'
    return div
  }
  // Add legend to the map
  legend.addTo(map)

  
    });

    // Here we create a legend control object.
// let legend = L.control({
//   position: "bottomright"

// });

// // Then add all the details for the legend
// legend.onAdd = function() {
//   let div = L.DomUtil.create("div", "info legend");

//   const magnitudes = [0, 1, 2, 3, 4, 5, 6];
//   const colors = [
//     "#98ee00",
//     "#d4ee00",
//     "#eecc00",
//     "#ee9c00",
//     "#ea822c",
//     "#ea2c2c",
//     "maroon"
//   ];

// // // Looping through our intervals to generate a label with a colored square for each interval.
// //   for (var i = 0; i < magnitudes.length; i++) {
// //     console.log(colors[i]);
// //     div.innerHTML +=
// //       "<i style='background: " + colors[i] + "'></i> " +
// //       magnitudes[i] + (magnitudes[i + 1] ? "&ndash;" + magnitudes[i + 1] + "<br>" : "+");
// //     }
// //     return div;
// //   };

//   // Finally, we our legend to the map.
//   legend.addTo(map);
    
    