const colorPicker = document.getElementById("colorPicker");

var table = document.getElementById("pixel_canvas");

function makeGrid(width, height) {
    let pixelCanvas, grid;
    pixelCanvas = $('#pixel_canvas');
    for (let i = 0; i < height; i++) { //Defining the height of the grid
        const row = table.insertRow(i);
        for (let j = 0; j < width; j++) { //Defining the width of the grid
            const cell = row.insertCell(j);
            cell.onclick = () => {//event listener for onclick
                cell.style.backgroundColor = colorPicker.value;//Setting the choosen color value to the grid
            };
        }
    }
};

const sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function(evt) {
    while (table.rows.length > 0) {
        table.deleteRow(0);//Deleting the exsiting grid when pressed on submit button
    }
    var width = $('#input_width').val();//Usser defined width
    var height = $('#input_height').val();//User defined height 
    evt.preventDefault();//Calling method not to triiger the deafult action
    makeGrid(width, height);
});