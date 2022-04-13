function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selCountry");

  d3.json("../geojson.json").then((data) => {   
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
  // selector.selectAll("option")
  //   .append("option")
  //   .text(country)
  //   .property("value", country);

// Use the first sample from the list to build the initial plots
var firstSample = countries[0];
// buildCharts(firstSample);
// buildMetadata(firstSample);
});
});
}
// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  // buildMetadata(newSample);
  // buildCharts(newSample);
  
}

// // Demographics Panel 
// function buildMetadata(sample) {
//   d3.json("samples.json").then((data) => {
//     console.log(data);
//     var metadata = data.metadata;
//     // Filter the data for the object with the desired sample number
//     var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
//     var result = resultArray[0];
//     // Use d3 to select the panel with id of `#sample-metadata`
//     var PANEL = d3.select("#sample-metadata");

//     // Use `.html("") to clear any existing metadata
//     PANEL.html("");

//     // Use `Object.entries` to add each key and value pair to the panel
//     // Hint: Inside the loop, you will need to use d3 to append new
//     // tags for each key-value in the metadata.
//     Object.entries(result).forEach(([key, value]) => {
//       PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
//     });

//   });
// }

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("../geojson.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var samples = data.samples;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var samplesArray = samples.filter(sampleObj => sampleObj.id == sample);
    //  5. Create a variable that holds the first sample in the array.
    firstSample = samplesArray[0];

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    otu_ids = firstSample.otu_ids;
    otu_labels = firstSample.otu_labels;
    sample_values = firstSample.sample_values;
    console.log(otu_ids, otu_labels, sample_values);
    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
    console.log(yticks);

    // 8. Create the trace for the bar chart. 
    var barData = [{
      x: sample_values.slice(0,10).reverse(),
      y: yticks,
      text: otu_labels, sample_values,
      type: "bar", 
      orientation: "h"
    }];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
     title: "Top 10 Bacteria Cultures Found",
     margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);

    // 1. Create the trace for the bubble chart.
    var bubbleData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        color: otu_ids,
        size: sample_values,
        colorscale: 'Earth'
      }
    }];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bacteria Cultures Per Sample",
      xaxis: {title: "OTU ID" },
      margin: {
        l: 50,
        r: 50,
        b: 50,
        t: 50
      },
      hovermode:'closest'
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); 

    
    // // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    // var metadata = data.metadata;
    // var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    
    // // 2. Create a variable that holds the first sample in the metadata array.
    // var result = resultArray[0];

    // // 3. Create a variable that holds the washing frequency.
    // var wfreq = parseFloat(result.wfreq);
    
    // // 4. Create the trace for the gauge chart.
    // var gaugeData = [{
    //   value: wfreq,
    //   title: { text: "<b> Belly Button Washing Frequency </b> <br> Scrubs Per Week" },
    //   type: "indicator",
    //   mode: "gauge+number",
    //   gauge: {
    //     axis: { range: [null, 10] },
    //     bar: { color: "black" },
    //     steps: [
    //       { range: [0, 2], color: "red" },
    //       { range: [2, 4], color: "orange" },
    //       { range: [4, 6], color: "yellow" },
    //       { range: [6, 8], color: "yellowgreen" },
    //       { range: [8, 10], color: "forestgreen" }
    //     ],
    //   }
    // }
     
    // ];
    
    // // 5. Create the layout for the gauge chart.
    // var gaugeLayout = { 
    //   automargin: true
    // };

    // // 6. Use Plotly to plot the gauge data and layout.
    // Plotly.newPlot("gauge", gaugeData, gaugeLayout);
    
  });
}