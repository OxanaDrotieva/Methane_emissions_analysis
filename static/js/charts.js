function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selCountry");

  d3.json("https://methane-bucket.s3.amazonaws.com/geojson.json").then((data) => {   
    var countries = [];
    for(var k in data.features) {
        countries.push(data.features[k].properties.name);
    }
    console.log(countries);
  
  
// Use the list of countries to populate the select options
countries.forEach((country) => {
  var selectbox = document.getElementById("selCountry");
  var optn = document.createElement("OPTION");
  optn.text = country;
  optn.value = country;
  selectbox.options.add(optn);
  console.log(country);
});
});
}
// Initialize the dashboard
init();
