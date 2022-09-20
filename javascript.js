//getting grid container to DOM
const gridContainer = document.querySelector('.grid-container');


/*color picker from react-color
import React from 'react'
import { SketchPicker } from 'react-color'

class Component extends React.Component {

  render() {
    return <SketchPicker />
  }
}; */

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
