const colorPicker = document.getElementById("colorPicker");

var table = document.getElementById("pixel_canvas");

function makeGrid(width, height) {
  let pixelCanvas, grid;
  pixelCanvas = $('#pixel_canvas');
  for (let i = 0; i < height; i++) {
    const row = table.insertRow(i);
      for (let j = 0; j < width; j++) {
        const cell = row.insertCell(j);
        cell.onclick = () => {
        cell.style.backgroundColor = colorPicker.value;
      };
    }
  }
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