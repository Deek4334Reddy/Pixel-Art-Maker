function makeGrid(width, height) {
  let pixelCanvas, grid;
  pixelCanvas = $('#pixel_canvas');
  for(let i = 0; i < height; i++) {
    grid += "<tr>";
    for (let j = 0; j < width; j++) {
      grid += "<td></td>";
    }
    grid += "</tr>";
  }// Defining height & width of the table
  pixelCanvas.html(grid);
  pixelCanvas.css("background-color", "#ffffff");//setting background color for canvas
};

const sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function(evt) {
	var width = $('#input_width').val();
	var height = $('#input_height').val();
    evt.preventDefault();
    makeGrid(width, height);
});

$('#pixel_canvas').click(function(e) { 
//Tried changing the event listner on to the individual cells(td) instead of 
//table but when left click is pressed the color of the cell doesn't change.
  let color = $('#colorPicker').val();
  $(e.target).css('background-color', color);//
});





// $(document).ready(function(){
//   $('#submit-btn').click(function(evt) { //event-listner for submit-btn on click
//     // let height, width;
//     var width = $('#input_width').val();
//     var height = $('#input_height').val();
//     evt.preventDefault();
//     makeGrid(width, height);
//   });