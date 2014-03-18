var COLS = 100;
var ROWS = 100;

var board = {};

function cellKey(x, y) {
  return "cell" + x + "-" + y;
}

function createBoard() {
  // var $board = an existing div with the id 'board'
  for (var j = 0; j < ROWS; j++) {
    // var $row = a new empty div with the class 'row'
    for (var i = 0; i < COLS; i++) {
      // var $cell = a new empty div with the class 'cell'
      // set the cell's id attribute. use cellKey()
      // append the cell to the row
    }
    // append the row to the board
  }
}

function refreshBoard() {
  for (var j = 0; j < ROWS; j++) {
    for (var i = 0; i < COLS; i++) {
      // var $cell = an existing div with the cell's id. use cellKey()
      if (board[cellKey(i, j)]) {
        // add the class 'alive' to the cell
      } else {
        // remove the class 'alive' from the cell
      }
    }
  }
}

function tick() {
  // TODO: remove the temporary code below,
  // build the next generation of living cells,
  // and replace the board with a new one

  for (var j = 0; j < ROWS; j++) {
    for (var i = 0; i < COLS; i++) {
      board[cellKey(i, j)] = Math.random() > 0.5;
    }
  }
}

function loop() {
  tick();
  refreshBoard();
  setTimeout(loop, 0);
}

$(function () {
  createBoard();
  loop();
});
