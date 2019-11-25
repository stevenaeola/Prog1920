  
d3.select("body")
  .selectAll("path")
  .data([22, 8, 15, 16, 23, 42])
    .attr("fill", function(d) { if(d>10){return "green"} else {return "red"}});
