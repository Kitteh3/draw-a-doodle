//getting grid container to DOM
const gridContainer = document.querySelector('.grid-container');
//creating grid square div
const gridSquare = document.createElement('div');

//color picker from react-color
import React from 'react'
import { SketchPicker } from 'react-color'

class Component extends React.Component {

  render() {
    return <SketchPicker />
  }
};

//getting slider to DOM
const slider = document.getElementById('myRange');
const output = document.getElementById('demo');
output.innerHTML = slider.value;
//update current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}