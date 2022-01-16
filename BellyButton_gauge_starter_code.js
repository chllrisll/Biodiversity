// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 

    // Create a variable that filters the samples for the object with the desired sample number.

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    // Create a variable that holds the first sample in the array.
    var washTimes = parseFloat(metadata.Washing_Freuency);

    // 2. Create a variable that holds the first sample in the metadata array.
    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var metadata = data.metadata;  


    // 3. Create a variable that holds the washing frequency.
    var gaugeData = [{
      domain: { x:[0,1], y: [0,1] },
      value: washTimes,
      title: "Indicator",
      mode: "gauge+number"
    }];
    // Create the yticks for the bar chart.
    var yticks = sampleValues.slice(0,10).map(otuId => `OTU ${otuId}`).reverse();
    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot("bar-plot", barData, barLayout);
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot('bubble', bubbleData, bubbleLayout);
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      domain: { x:[0,1], y: [0,1] },
      value: washTimes,
      title: "indicator",
      mode: "gauge+number"
  
    }];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { width: 800, height: 300, margin: { t: 50, b: 10 } };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot('myDiv', gaugeData, gaugeLayout);
  });
}