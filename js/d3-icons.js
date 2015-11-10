/**
 * Created by rrasai001c on 11/6/15.
 */

/**
 * In the below dataSet, facode has been taken from this site http://astronautweb.co/snippet/font-awesome/
 * Add the 'u' between '\' and 'f' ti make the fontawesome work. Ex:- "\f021" should be "\uf021"
 */

var dataSet = [
    { "facode":"\uf021", "position":1, "name":"CTE" },
    { "facode":"\uf085", "position":2, "name":"PS"},
    { "facode":"\uf0ac", "position":3, "name":"HSD" },
    { "facode":"\uf013", "position":4, "name":"PISP" },
    { "facode":"\uf013", "position":5, "name":"BAAC" },
    { "facode":"\uf21b", "position":6, "name":"FC" },
    { "facode":"\uf025", "position":7, "name":"CS" },
    { "facode":"\uf023", "position":8, "name":"INC" },
    { "facode":"\uf192", "position":9, "name":"CAAP" },
    { "facode":"\uf218", "position":10, "name":"OMS" }
];

var margin = {top: 20, right: 20, bottom: 30, left:40},
    ww = document.getElementById("svg-container").clientWidth,
    width = ww - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .domain([0, 300])
    .range([0, width]);

var y = d3.scale.linear()
    .domain([0, 100])
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

// Create the SVG Container.

var svgContainer = d3.select("#svg-container")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.right + ")");

    svgContainer.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svgContainer.append("g")
        .attr("class", "y axis")
        .call(yAxis);

// Create the linear gradient.

var gradient = svgContainer.append("svg:defs")
    .append("svg:linearGradient")
    .attr("id", "gradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");

gradient.append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", "#FFFFFF")
    .attr("stop-opacity", "1");

gradient.append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", "#dadada")
    .attr("stop-opacity", "1");

// Create the SVG g element

var iconContainer = svgContainer.append("g");
var hexagonContainer = svgContainer.append("g");

// Create the circle and group it in the g element

var iconCircle = iconContainer.selectAll("circle")
    .data(dataSet)
    .enter().append("circle")
    .attr("cx", function(d) { return d.position * 55 })
    .attr("cy", "100")
    .attr("r", "23")
    .attr("fill", "url(#gradient)")
    .attr("stroke", "#11b0d1")
    .attr("stroke-width", "3");

var hexContainer = hexagonContainer.selectAll("path")
    .data(dataSet)
    .enter().append("path")
    .attr("transform", function(d) { return "translate(" + d.position * 55 + ",200)" })
    .attr("d", "M-21.2-12.3L0-24.5l21.2,12.3v24.5L0,24.5l-21.2-12.3V-12.3z")
    .attr("fill", "url(#gradient)")
    .attr("stroke", "#11b0d1")
    .attr("stroke-width", "3");

    hexagonContainer.selectAll("text")
        .data(dataSet)
        .enter().append("text")
        .attr("x", function(d) { return d.position * 55 })
        .attr("y", "200")
        .attr("font-size", "1.7em")
        .attr("font-family", "FontAwesome")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .attr("fill", "#6c6c6c")
        .text(function(d) {  return d.facode });

    hexagonContainer.selectAll("text.name")
        .data(dataSet)
        .enter().append("text")
        .attr("x", function(d) { return d.position * 55 })
        .attr("y", "245")
        .attr("font-size", ".900em")
        .attr("font-family", "FontAwesome")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .attr("fill", "#6c6c6c")
        .text(function(d) {  return d.name });

// Create the FontAwesome text and group it in the g element

    iconContainer.selectAll('text')
        .data(dataSet)
        .enter().append("text")
        .attr("font-size", "1.7em")
        .attr("font-family", "FontAwesome")
        .attr("x", function(d) { return d.position * 55 })
        .attr("y", "100")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .attr("fill", "#6c6c6c")
        .text(function(d) {  return d.facode });

    // Create the text and group it in the g element

    iconContainer.selectAll("text.name")
        .data(dataSet)
        .enter().append("text")
        .attr("font-size", ".900em")
        .attr("font-family", "Open Sans")
        .attr("x", function(d) { return d.position * 55 })
        .attr("y", "145")
        .attr("text-anchor", "middle")
        .attr("fill", "#6c6c6c")
        .text(function(d) { return d.name });

    svgContainer.append("text")
        .attr("font-size", ".900em")
        .attr("font-family", "Open Sans")
        .attr("x", "460")
        .attr("y", "57")
        .attr("id", "color-code")
        .text("#e42222");

    d3.select("#red")
        .on("click", function() {
            d3.selectAll("path")
                .attr("stroke", "#e42222")
                .attr("stroke-width", "3");

            d3.selectAll("circle")
                .attr("stroke", "#e42222")
                .attr("stroke-width", "3");

            d3.select("text#color-code")
                .attr("fill", "#e42222")
                .text("#e42222");
        });

    d3.select("#green")
        .on("click", function() {
            d3.selectAll("path")
                .attr("stroke", "#24a203")
                .attr("stroke-width", "3");

            d3.selectAll("circle")
                .attr("stroke", "#24a203")
                .attr("stroke-width", "3");

            d3.select("text#color-code")
                .attr("fill", "#24a203")
                .text("#24a203");
        });

    d3.select("#orange")
        .on("click", function() {
            d3.selectAll("path")
                .attr("stroke", "#f07100")
                .attr("stroke-width", "3");

            d3.selectAll("circle")
                .attr("stroke", "#f07100")
                .attr("stroke-width", "3");

            d3.select("text#color-code")
                .attr("fill", "#f07100")
                .text("#f07100");
        });

    d3.select("#blue")
        .on("click", function() {
            d3.selectAll("path")
                .attr("stroke", "#11b0d1")
                .attr("stroke-width", "3");

            d3.selectAll("circle")
                .attr("stroke", "#11b0d1")
                .attr("stroke-width", "3");

            d3.select("text#color-code")
                .attr("fill", "#11b0d1")
                .text("#11b0d1");
        });

    d3.select("#gray")
        .on("click", function() {
            d3.selectAll("path")
                .attr("stroke", "#b8b8b8")
                .attr("stroke-width", "3");

            d3.selectAll("circle")
                .attr("stroke", "#b8b8b8")
                .attr("stroke-width", "3");

            d3.select("text#color-code")
                .attr("fill", "#b8b8b8")
                .text("#b8b8b8");
        });
