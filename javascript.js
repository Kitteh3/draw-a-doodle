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