//getting grid container to DOM
const gridContainer = document.querySelector('.grid-container');

//hiding canvas color picker
const canvasPicker = document.querySelector('.canvas-picker');
canvasPicker.style.display = 'none';

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

//CHOOSE A COLOR
//colorSquares is a nodelist of the 48 colors in the grid
const colorSquares = document.querySelectorAll('.color-square');

//get sample div to DOM
const sample = document.querySelector('.color-sample');
const sampleColor = window.getComputedStyle(sample);
let userColor = sampleColor.getPropertyValue('background-color');
// adding chosen color to color-sample
colorSquares.forEach((div) => {
  div.addEventListener('click', (e) => {
    sample.style.backgroundColor = e.target.style.backgroundColor;
    userColor = e.target.style.backgroundColor;
  });
});

//live drawing
let pixels = document.querySelectorAll('.grid-square');
//creating function for drawing to be called inside event listeners for live drawing and eraser tool
function drawing() {
  pixels.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = userColor;
    });
    div.addEventListener('touchmove', (e) => {
      e.target.style.backgroundColor = userColor;
    });
  });
};
//calling function for live drawing
drawing();

//clear drawing
const clearContainer = document.querySelector('.clear');
clearContainer.addEventListener('click', () => {
  pixels.forEach((div) => {
    div.style.backgroundColor = 'transparent';
  });
});
//canvas-color tool
const canvasTool = document.querySelector('#canvas-color img');

//canvas color picker
function makeCanvasPicker(rows, cols) {
  canvasPicker.style.setProperty('--grid-rows', rows);
  canvasPicker.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
    let colorSquare = document.createElement('div');
    canvasPicker.appendChild(colorSquare).className = 'color-square';
    colorSquare.style.backgroundColor = colors[i];
  };
};
//changing canvas color
canvasTool.addEventListener('click', (e) => {
  //canvas tool style on click
  e.target.style.border = '3px solid #ffffff';
  e.target.style.borderRadius = '100%';
  //show the canvas picker in tools section
  makeCanvasPicker(4, 12);
  canvasPicker.style.display = 'grid';
  //setting canvas to selected color
  let canvasColorSquares = document.querySelectorAll('.canvas-picker div');
  canvasColorSquares.forEach((div) => {
    div.addEventListener('click', (e) => {
      gridContainer.style.backgroundColor = e.target.style.backgroundColor;
      canvasPicker.style.display = 'none';
      canvasTool.style.border = 'none';
      canvasTool.style.borderRadius = '0%';
    });
  });
});

//eraser tool
const eraserTool = document.querySelector('#eraser img');
//erasing pixels when passed over
eraserTool.addEventListener('click', (e) => {
  //eraser tool style on click
  eraserTool.classList.toggle('active');
  if (eraserTool.getAttribute('class') === 'active') {
    userColor = 'transparent';
  } else if (eraserTool.getAttribute('class') !== 'active') {
    userColor = sampleColor.getPropertyValue('background-color');
  };
});

//rainbow tool
const rainbowTool = document.querySelector('#rainbow img');
//generating random colors
function randomRainbow() {
  pixels.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    });
    div.addEventListener('touchmove', (e) => {
      e.target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    });
  });
};
//using function when icon is clicked

rainbowTool.addEventListener('click', (e) => {
  //rainbow tool style on click
  rainbowTool.classList.toggle('active');
  if (rainbowTool.getAttribute('class') === 'active') {
    randomRainbow();
  } else if (rainbowTool.getAttribute('class') !== 'active') {
    drawing();
  };
});
