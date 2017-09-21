    // Add first svg element for line chart
   var svg1 = dimple.newSvg("#line", 800, 400);

    d3.csv("data/age.csv", function(data) {

        // Draw line/point chart for age_grouped data
        var chart = new dimple.chart(svg1, data);

        x = chart.addCategoryAxis("x", "Age_Group");
        // Add ordered age_grouped to x-axis
        x.addGroupOrderRule(["0-15", "16-30", "31-45", "46-60", "60+"]);

        y = chart.addMeasureAxis("y", "Survival_Rate");
        y.overrideMax = 1.0;

        // Add scatter points on the plot
        chart.addSeries(null,dimple.plot.scatter);
        // Add lines on the plot
        chart.addSeries(null,dimple.plot.line);

        // This block simply add title
        svg1.append("text")
         .attr("x", chart._xPixels() + chart._widthPixels() / 2)
         .attr("y", chart._yPixels() - 20)
         .style("text-anchor", "middle")
         .style("font-weight", "bold")
         .text("Survival Rate: Age-grouped");

    chart.draw();
    });



    // Add second svg element for bar chart
    var svg2 = dimple.newSvg("#Bar1", 800, 400);

    d3.csv("data/companion.csv", function(data) {

        // Draw bar chart for companion data
        var chart = new dimple.chart(svg2, data);

        x = chart.addCategoryAxis("x", "Alone/Not_Alone");

        y = chart.addMeasureAxis("y", "Survival_Rate");
        y.overrideMax = 1.0;

        // Add bar plot on svg2 container
        chart.addSeries(null, dimple.plot.bar);

        // code block to add title
        svg2.append("text")
         .attr("x", chart._xPixels() + chart._widthPixels() / 2)
         .attr("y", chart._yPixels() - 20)
         .style("text-anchor", "middle")
         .style("font-weight", "bold")
         .text("Survival Rate: Comparing those who were travelling alone to those who were not");

      chart.draw();
    });


    // Add thired svg element  for stacked bar
    var svg3 = dimple.newSvg("#Bar2" ,800, 400);

    d3.csv("data/class-sex.csv", function(data) {

        // Draw stacked bar for survival based on class by sex
        var chart = new dimple.chart(svg3, data);

        // grouped x-axis data points by class
        chart.addCategoryAxis("x", ["Class"]);

        y = chart.addMeasureAxis("y", "Survival Rate");
        y.overrideMax = 1.0;

        // Add stacked bar plot on svg3 container
        chart.addSeries("Sex", dimple.plot.bar);

        // code block to add title
        svg3.append("text")
         .attr("x", chart._xPixels() + chart._widthPixels() / 2)
         .attr("y", chart._yPixels() - 20)
         .style("text-anchor", "middle")
         .style("font-weight", "bold")
         .text("Survival Rate: Class");

        // Add lengend
     chart.addLegend(65, 28, 510, 20, "right");

    chart.draw();
    });
