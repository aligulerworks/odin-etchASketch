'use strict';




//Canvas size/resolution
// const cellCount = '1fr 1fr 1fr 1fr 1fr';


// Variables for existing elements
const canvas = document.getElementById('canvas');

//Create Cells to be Painted
let cell = document.createElement('div');
let cellCount;
let cellSize;

// Cell Filling Function
function canvasGrid(userCellInput) {
   let count = userCellInput*userCellInput;
   cellCount = userCellInput;
   // hey eva (I could not apply the 'cellSize' variable to the object in the styles)
   cellSize = `${cellCount/100}rem`;
   (userCellInput > count) ? count = userCellInput : count;

   for (let i = 0; i < count; i++) {
   // Put Cell into canvas
   cell = canvas.appendChild(document.createElement('div'));
   cell.classList.add('cell');
   Object.assign(cell.style, cellStyles);
   Object.assign(canvas.style, canvasStyles);
   canvas.style.gridTemplateColumns = `repeat(${cellCount}, 1fr`;
   canvas.style.gridTemplateRows = `repeat(${cellCount}, 1fr`;

   }
}



// STYLES
//style list of cell
const cellStyles = {
   'display': 'grid',
   'place-items': 'center',
   'width': cellSize,
   'height': cellSize,
   // 'width': `${cellCount/100}rem`,
   // 'height': `${cellCount/100}rem`,
   // 'border-radius': '0.1rem',
   'box-sizing': 'border-box',
   'overflow': 'hidden'
   
};

// style list of canvas
const canvasStyles = {
   'display': 'grid',
   'width': '100%',
   'height': '100%',
   'gap': '0',
   'grid-template-columns': `${cellCount}`
}

//ASSIGN LISTED STYLES
// assign styles to canvas
Object.assign(canvas.style, canvasStyles);
//assign styles to cell
// Object.assign(cell.style, cellStyles);





//cell size and count function



//TESTS
canvasGrid(60);