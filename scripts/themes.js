if (window.matchMedia("(prefers-color-scheme: dark)").matches){
    
    
    /*make it a good pratice to comment.
    once you get a big file, everything gets out of hand
    */
   //set background color
    d3.select('body')
    .style("background-color", "#111111")
    
    //select EVERY text element that i'm using and set color to white
    d3.selectAll("p, h1, h2, h3, h4, h5, h6, a, marquee, small")
    .style("color", "#ffffff")
}