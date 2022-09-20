//getting grid container to DOM
const gridContainer = document.querySelector('.grid-container');


//getting slider to DOM
const slider = document.getElementById('myRange');
const output = document.getElementById('demo');
output.innerHTML = slider.value;

//grid layout
function makeGrid(rows, cols) {
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
    let gridSquare = document.createElement('div');
    gridContainer.appendChild(gridSquare).className = 'grid-square';
  };
}; 
makeGrid(50, 50); //start with 50x50
//update current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  let value = Number(this.value);
  makeGrid(value, value);
};

//changing color:
//get background color of sample
const sample = document.querySelector('.color-sample');
const style = getComputedStyle(sample);
const color = style.backgroundColor;
console.log(color);

//color picker
const colorContainer = document.querySelector('.container');
//make array of colors
const colors = ['#960f0f', '#9e3e1d', '#a0840e', '#727209', '#3e6008', '#054905', '#08603a', '#097064', '#074960', '#052a56', '#352189', '#6907a8', '#e81515', '#e8632e', '#e5bd13', '#a7af12', '#5e960e', '#107010', '#0a995f','#15b7a7', '#0b73a0', '#0c4496', '#6143bf', '#ab38e8', '#ed6666', '#e2a18a', '#edd87e', '#dbd85d', '#a3ce5f', '#509350', '#61c197', '#6dccc1', '#68aac1', '#638bba', '#7266bc', '#ba7de2', '#ffffff', '#e2e2e2', '#ccccca', '#b2b2b1', '#999998', '#848484', '#727272', '#5b5b5b', '#444443', '#303030', '#1c1c1c', '#000000']

function makePicker(rows, cols) {
  colorContainer.style.setProperty('--grid-rows', rows);
  colorContainer.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
    let colorSquare = document.createElement('div');
    colorContainer.appendChild(colorSquare).className = 'color-square';
    colorSquare.style.backgroundColor = colors[i];
  };
};
makePicker(4, 12);
