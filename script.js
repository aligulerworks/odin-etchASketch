'use strict';

const canvas = document.getElementById('canvas');
const cell = document.createElement('div');
cell.className = 'cell';

// STYLINGS
// Canvas Styles
const canvasStyles = {
  'display': 'grid',
  'place-items': 'start',
  'width': '100%',
  'height': '100%',
  'gap': '0',
};
// Cell Styles
const cellStyles = {
  'display': 'grid',
  'place-items': 'start',
  'width': '100%',
  'height': '100%',
  'box-sizing': 'border-box',
  'overflow': 'hidden',
  'background': 'white',
  'border': '1px solid grey',
};
// END OF STYLINGS

// CELL DIV CREATOR

// CELL GRID CREATOR
const createCanvas = function (userCellCount) {
  let totalCellCount = userCellCount ** 2;
  let cellSize = 100 / userCellCount;
  let cells;

  for (let i = 0; i < totalCellCount; i++) {
    cells = cells + cell;
  }
  canvas.appendChild(cells);

  canvas.style.gridTemplateColumns = `repeat(${userCellCount}, ${cellSize}vmin`;
  canvas.style.gridTemplateRows = `repeat(${userCellCount}, ${cellSize}vmin`;
};

const eachCell = document.querySelectorAll('.cell');

Object.assign(canvas.style, canvasStyles);
Object.assign(cell.style, cellStyles);

//redo all above

//TESTS
createCanvas(32);
