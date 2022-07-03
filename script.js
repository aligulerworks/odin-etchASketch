'use strict';




//Canvas size/resolution
// const cellCount = '1fr 1fr 1fr 1fr 1fr';


// Variables for existing elements
const canvas = document.getElementById('canvas');

//Create Cells to be Painted
let cell = document.createElement('div');
let cellCount;

// Cell Filling Function
function canvasGrid(userCellInput) {
   let count = userCellInput;
   cellCount = userCellInput;
   (userCellInput > count) ? count = userCellInput : count;

   for (let i = 0; i < count; i++) {
   // Put Cell into canvas
   cell = canvas.appendChild(document.createElement('div'));
   cell.classList.add('cell');
   cell.textContent = 'durruk';
   Object.assign(cell.style, cellStyles);
   Object.assign(canvas.style, canvasStyles);


   }
}



// STYLES
//style list of cell
const cellStyles = {
   'display': 'grid',
   'place-items': 'center',
   'background-color': 'lightblue',
   'width': '60px',
   'height': '60px',
   'border-radius': '0.5rem',
   'box-sizing': 'border-box',
   'overflow': 'hidden'
   
};

// style list of canvas
const canvasStyles = {
   'display': 'grid',
   'width': '100%',
   'height': '100%',
   'gap': '4px',
   'grid-template-columns': '10fr',
}

//ASSIGN LISTED STYLES
// assign styles to canvas
Object.assign(canvas.style, canvasStyles);
//assign styles to cell
// Object.assign(cell.style, cellStyles);





//cell size and count function



//TESTS
canvasGrid(12);