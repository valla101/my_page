// D3 For Gif Image

var gif_proj_1 = d3.select("#project_1_gif")
var canvas_proj_1_gif = d3.select("#project_1_canvas")

function test (){
    console.log(d3.event.target.src)
    // console.log(element1.src);

};

gif_proj_1.on("click", test);

// test (gif_proj_1, canvas_proj_1_gif);

