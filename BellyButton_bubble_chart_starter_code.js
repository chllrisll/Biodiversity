// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    

    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);

    // 1. Create the trace for the bubble chart.
    var bubbleData = [{
      x: otu_ids.map(id => id),
      y: sample_values.map(value => value),
      text: otu_labels,
      mode: 'markers',
      marker: {
        color: otu_ids,
        size: sample_values,
        colorscale: 'Rainbow'

      }
      
    }];

    var data = [bubbleData];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "The Amount of Bacteria in Belly Buttons",
      xaxis: {title: "OTU Ids" },
      //margin:{1: 100 },
      //showlegend: false,
      height: 600,
      length: 600
    };
    
    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot('bubble', bubbleData, bubbleLayout);
  });
}
