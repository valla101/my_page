// D3 For Gif Image

var gif_proj_1 = d3.select("#project_1_gif")
var canvas_proj_1_gif = d3.select("#project_1_canvas")

function test (){
    console.log(d3.event.target.src)
    // console.log(element1.src);

};

gif_proj_1.on("click", test);


// Following is script for enlarging and closing images

// Get the modal

// Modal for NBA Project
var modal = document.getElementById("myModal");



// Get the button that opens the modal
var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    console.log("This worked");
  };
  
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  };

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };


// Modal Function for Project 2

// Modal for Power Plants Project
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

var span2 = document.getElementById("close_modal2");

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
  console.log("This worked");
};

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};