'use strict';

const canvas = document.getElementById('canvas');
const cell = () => (canvas.createElement('div').className = 'cell');

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
};
// END OF STYLINGS

// CELL DIV CREATOR

// CELL GRID CREATOR
const createCanvas = function (userCellCount) {
  let totalCellCount = userCellCount ** 2;
  let cellSize = 100 / userCellCount;
  for (let i = 0; i < totalCellCount; i++) {
    cell;
  }

  canvas.style.gridTemplateColumns = `repeat(${userCellCount}, ${cellSize}vmin`;
  canvas.style.gridTemplateRows = `repeat(${userCellCount}, ${cellSize}vmin`;
};

const eachCell = document.getElementsByClassName(cell);

Object.assign(canvas.style, canvasStyles);
Object.assign(eachCell.style, cellStyles);

//redo all above

//TESTS
createCanvas(100);
