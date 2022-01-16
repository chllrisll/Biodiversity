// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    

    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    //Plotly.newPlot("bar-plot", barData, barLayout);

    // 1. Create the trace for the bubble chart.
    var bubbleData = [{
      x: otuId.slice(0,10).reverse(),
      y: sampleValues.slice(0,10).reverse(),
      text: otuLabels.slice(0,10).reverse(),
      mode: 'markers',
      marker: {
        color: otuId,
        size: sampleValues
      }
      
    }];

    //var data = [bubbleData];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = [{
      title: "The Amount of Bacteria in Belly Buttons",
      xaxis: {title: "OTU Ids" },
      margin:{1: 100 },
      showlegend: false,
      height: 600,
      length: 600
    }];
    
    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot('bubble', bubbleData, bubbleLayout);
  });
}
