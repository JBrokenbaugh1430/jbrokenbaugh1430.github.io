if (window.matchMedia("(prefers-color-scheme: dark)").matches){
    
    
   //set background color
    d3.select('body')
    .style("background-color", "#111111")
    
    //select every text element that i'm using and set color to white
    d3.selectAll("p, h1, h2, h3, h4, h5, h6, a, marquee, small, li")
    .style("color", "#ffffff")
}
