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

// Add layers for GDP, methane emissions and emissions/GDP ratio data 
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
	center: [40.7, 10],
	zoom: 2,
	layers: [streets, groupedOverlays.Countries['Methane Emission']]
});

// Create a base layer that holds two maps.
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

// Add a control to the map that will allow the user to change which
// layers are visible.
L.control.groupedLayers(baseMaps, groupedOverlays, options).addTo(map);

// Retrieve the GDP and emission GeoJSON data.
// d3.json("../geojson.json").then(function(data) {
d3.json("https://methane-bucket.s3.amazonaws.com/geojson.json").then(function(data) {
  // data = "https://methane-bucket.s3.amazonaws.com/geojson.json"
  // Creating a GeoJSON layer with the retrieved GDP data.
  L.choropleth(data, {
    	// Turn each feature into a polygon on the map.
      valueProperty: function(feature){
        if ('GDP' in feature.properties){
            return feature.properties.GDP["2018"]         
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
     // Create a popup for each contry to display its name and GDP 
      onEachFeature: function(feature, layer) {
        if ('GDP' in feature.properties && '2018' in feature.properties.GDP){
              layer.bindPopup("Country: " + feature.properties.name + "<br>GDP: " + feature.properties.GDP['2018'] + " billion $");}
    }
  }).addTo(gdp);

  // Then we add the GDP layer to our map.
  //gdp.addTo(map);

  // Creating a GeoJSON layer with the retrieved emission data.
  L.choropleth(data, {
    valueProperty: function(feature){
      if ('methane' in feature.properties){
        if('Total including LUCF' in feature.properties.methane){
          return feature.properties.methane["Total including LUCF"]["2018"]
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
    // Create a popup for each contry to display its name and methane emission 
    onEachFeature: function(feature, layer) {
      if ('methane' in feature.properties && 'Total including LUCF' in feature.properties.methane){
        layer.bindPopup("Country: " + feature.properties.name + "<br>Methane Emission: " + feature.properties.methane['Total including LUCF']['2018'] + " Metric tons of carbon dioxide equivalent");
      }
  }
  }).addTo(emission);

  // Creating a GeoJSON layer with the GDP/emission ratio.
  var choroplethLayer = L.choropleth(data, {
    valueProperty: function(feature){
      if ('methane' in feature.properties && 'GDP' in feature.properties){
        if('Total including LUCF' in feature.properties.methane && '2018' in feature.properties.GDP){
          return feature.properties.methane["Total including LUCF"]["2018"]/feature.properties.GDP['2018']
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
  // Popup marker with country name, GDP and emission data
    onEachFeature: function(feature, layer) {
      if (('methane' in feature.properties && 'Total including LUCF' in feature.properties.methane) && ('GDP' in feature.properties && '2018' in feature.properties.GDP)){
        layer.bindPopup("Country: " + feature.properties.name + "<br>Methane Emission: " + feature.properties.methane['Total including LUCF']['2018'] + " Metric tons of carbon dioxide equivalent" + "<br>GDP: " + feature.properties.GDP['2018'] + " billion $");
      }
  }
  }).addTo(ratio);
  // Then we add the emission layer to our map.
  //emission.addTo(map);

  // Create a legend control object.
  var legend = L.control({ position: 'bottomright' })
  // Add details for the legend
  legend.onAdd = function (ratio) {
    var div = L.DomUtil.create('div', 'info legend')
    var limits = choroplethLayer.options.limits
    var colors = choroplethLayer.options.colors
    var labels = ['Lowest or no data',' ',' ',' ',' ',' ',' ','Highest']
    
    // Put labels on the legend
    for (var i = 0; i < limits.length; i++) {
      div.innerHTML += '<label>' + labels[i] + '</label>'}
      
    // a line break
    div.innerHTML += '<br>';
    
    // Get colors for the legend
    for (var i = 0; i < limits.length; i++) {
      div.innerHTML +=
          '<span style="background:' + colors[i] + '"></span> ';
    }

    return div;
  };

  
  // Add legend to the map
  legend.addTo(map)  
});