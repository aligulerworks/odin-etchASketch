'use strict';


//Canvas size/resolution
const cellCount = '1fr 1fr 1fr 1fr 1fr';


// Variables for existing elements
const canvas = document.getElementById('canvas');

//Create Cells to be Painted
const cell = document.createElement('div');
cell.classList.add('cell');
cell.textContent = 'Naber durruk';


// STYLES
//style list of cell
const cellStyles = {
   'background-color': 'lightblue',
   'width': '100px',
   'height': '100px',
   'border-radius': '5%',
   'box-sizing': 'border-box'
};

// style list of canvas
const canvasStyles = {
   'grid-template-columns': 'auto',
   'grid-template-rows': 'auto',
   'gap': '2px',
}

//ASSIGN LISTED STYLES
// assign styles to canvas
Object.assign(canvas.style, canvasStyles);
//assign styles to cell
Object.assign(cell.style, cellStyles);


// Put Cell into canvas
canvas.appendChild(cell);



//cell size and count function



