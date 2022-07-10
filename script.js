'use strict';




//Canvas size/resolution
// const cellCount = '1fr 1fr 1fr 1fr 1fr';


// Variables for existing elements
const canvas = document.getElementById('canvas');

//Create Cells to be Painted
let cell = document.createElement('div');
let lineCount;
let cellSize;

// Cell Filling Function
function canvasGrid(userCellInput) {
   let totalCellcount = userCellInput*userCellInput;
   lineCount = userCellInput;
   cellSize = (100/lineCount);

   for (let i = 0; i < totalCellcount; i++) {
   // Put Cell into canvas
   cell = canvas.appendChild(document.createElement('div'));
   cell.classList.add('cell');
   Object.assign(cell.style, cellStyles);
   Object.assign(canvas.style, canvasStyles);
   }

   canvas.style.gridTemplateColumns = `repeat(${lineCount}, ${cellSize}vmin`;
   canvas.style.gridTemplateRows = `repeat(${lineCount}, ${cellSize}vmin`;
   return;
}



// STYLES
//style list of cell
const cellStyles = {
   'display': 'grid',
   'place-items': 'start',
   'width': '100%',
   'height': '100%',
   'box-sizing': 'border-box',
   'overflow': 'hidden'
   
};

// style list of canvas
const canvasStyles = {
   'display': 'grid',
   'place-itesm': 'start',
   'width': '100%',
   'height': '100%',
   'gap': '0',
}

//ASSIGN LISTED STYLES
// assign styles to canvas
Object.assign(canvas.style, canvasStyles);
//assign styles to cell
// Object.assign(cell.style, cellStyles);





//cell size and count function



//TESTS
canvasGrid(100);



// POINTER OVERS'

const chosenCell = document.querySelectorAll('.cell');

chosenCell.onpointerover = (event) => {
   console.log('Pointer moved in');
 };