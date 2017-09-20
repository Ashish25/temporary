   var svg1 = dimple.newSvg("#line", 800, 400);

    d3.csv("data/age.csv", function(data) {

        var chart = new dimple.chart(svg1, data);

        x = chart.addCategoryAxis("x", "Age_group");
        x.addOrderRule(["0-15", "16-30", "31-45", "46-60", "60+"]);
        chart.addMeasureAxis("y", "Survival_Rate");
        chart.addSeries(null,dimple.plot.scatter);
        chart.addSeries(null,dimple.plot.line);
        svg1.append("text")
         .attr("x", chart._xPixels() + chart._widthPixels() / 2)
         .attr("y", chart._yPixels() - 20)
         .style("text-anchor", "middle")
         .style("font-weight", "bold")
         .text("Survival vs Age-bins");
    chart.draw();
    });


    var svg2 = dimple.newSvg("#Bar1", 800, 400);

    d3.csv("data/companion.csv", function(data) {
        var chart = new dimple.chart(svg2, data);
        x = chart.addCategoryAxis("x", "Alone/Not_Alone");
        chart.addMeasureAxis("y", "Survival_Rate");
        chart.addSeries(null, dimple.plot.bar);
        svg2.append("text")
         .attr("x", chart._xPixels() + chart._widthPixels() / 2)
         .attr("y", chart._yPixels() - 20)
         .style("text-anchor", "middle")
         .style("font-weight", "bold")
         .text("Survival Rate: Comparing those who were travelling alone to those who were not");

      chart.draw();
    });

    var svg3 = dimple.newSvg("#Bar2" ,800, 400);

    d3.csv("data/class-sex.csv", function(data) {
        var chart = new dimple.chart(svg3, data);
        chart.addCategoryAxis("x", ["Class"]);
        chart.addMeasureAxis("y", "Survival Rate");
        chart.addSeries("Sex", dimple.plot.bar);
        svg3.append("text")
         .attr("x", chart._xPixels() + chart._widthPixels() / 2)
         .attr("y", chart._yPixels() - 20)
         .style("text-anchor", "middle")
         .style("font-weight", "bold")
         .text("Survival Rate: Class");
     chart.addLegend(65, 28, 510, 20, "right");
    chart.draw();
    });
