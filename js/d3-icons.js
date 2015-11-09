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
    { "facode":"\uf0ac", "position":3, "name":"HSD" }
]

var width = 800,
    height = 400;

// Create the SVG Container.

var svgContainer = d3.select("#svg-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

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

// Create the circle and group it in the g element

var iconCircle = iconContainer.selectAll("circle")
    .data(dataSet)
    .enter().append("circle")
    .attr("cx", function(d) { return d.position * 55 })
    .attr("cy", "100")
    .attr("r", "23")
    .attr("fill", "url(#gradient)");

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
    .attr("font-family", "verdana")
    .attr("x", function(d) { return d.position * 55 })
    .attr("y", "145")
    .attr("text-anchor", "middle")
    .attr("fill", "#6c6c6c")
    .text(function(d) { return d.name });

