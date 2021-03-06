function sudoku2(grid) {
  let transposedGrid = transpose(grid);
  for (let i = 0; i < grid.length; i++) {
    if (checkRow(grid[i]) == false || checkRow(transposedGrid[i]) == false) {
      return false;
    }
  }

  return checkSquares(grid);
}

function checkRow(row) {
  let vals = new Set;

  for (let i = 0; i < 9; i++) {
    if (row[i] != ".") {
      if (vals.has(row[i])) {
        return false;
      }
      vals.add(row[i]);
    }
  }

  return true;
}

function checkSquares(grid) {
  let pos = [0, 0];

  while (pos[0] <= 6 && pos[1] <= 6) {
    let vals = new Set;

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (grid[row + pos[0]][col + pos[1]] != ".") {
          if (vals.has(grid[row + pos[0]][col + pos[1]])) {
            return false;
          }
          vals.add(grid[row + pos[0]][col + pos[1]]);
        }
      }
    }

    if (pos[0] == 6 && pos[1] == 6) {
        return true;
    } else if (pos[0] == 6) {
        pos[0] = 0;
        pos[1] += 3;
    } else {
        pos[0] += 3;
    }
  }

  return true;
}

function transpose(grid) {
  let transposedGrid = [[],[],[],[],[],[],[],[],[]];

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      transposedGrid[j].push(grid[i][j]);
    }
  }

  return transposedGrid;
}

console.log(sudoku2([[".",".",".","1","4",".",".","2","."],
 [".",".","6",".",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".","1",".",".",".",".",".","."],
 [".","6","7",".",".",".",".",".","9"],
 [".",".",".",".",".",".","8","1","."],
 [".","3",".",".",".",".",".",".","6"],
 [".",".",".",".",".","7",".",".","."],
 [".",".",".","5",".",".",".","7","."]]) == true);

console.log(sudoku2([[".",".",".",".","2",".",".","9","."],
 [".",".",".",".","6",".",".",".","."],
 ["7","1",".",".","7","5",".",".","."],
 [".","7",".",".",".",".",".",".","."],
 [".",".",".",".","8","3",".",".","."],
 [".",".","8",".",".","7",".","6","."],
 [".",".",".",".",".","2",".",".","."],
 [".","1",".","2",".",".",".",".","."],
 [".","2",".",".","3",".",".",".","."]]) == false);

console.log(sudoku2([[".",".","4",".",".",".","6","3","."],
 [".",".",".",".",".",".",".",".","."],
 ["5",".",".",".",".",".",".","9","."],
 [".",".",".","5","6",".",".",".","."],
 ["4",".","3",".",".",".",".",".","1"],
 [".",".",".","7",".",".",".",".","."],
 [".",".",".","5",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","."]]) == false);

console.log(sudoku2([[".",".",".",".",".",".",".",".","2"],
 [".",".",".",".",".",".","6",".","."],
 [".",".","1","4",".",".","8",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".",".",".","3",".",".",".","."],
 ["5",".","8","6",".",".",".",".","."],
 [".","9",".",".",".",".","4",".","."],
 [".",".",".",".","5",".",".",".","."]]) == true);

console.log(sudoku2([[".","9",".",".","4",".",".",".","."],
 ["1",".",".",".",".",".","6",".","."],
 [".",".","3",".",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".",".","7",".",".",".",".","."],
 ["3",".",".",".","5",".",".",".","."],
 [".",".","7",".",".","4",".",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".",".",".","7",".",".",".","."]]) == true);

console.log(sudoku2([["7",".",".",".","4",".",".",".","."],
 [".",".",".","8","6","5",".",".","."],
 [".","1",".","2",".",".",".",".","."],
 [".",".",".",".",".","9",".",".","."],
 [".",".",".",".","5",".","5",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","."]]) == false);

console.log(sudoku2([[".","4",".",".",".",".",".",".","."],
 [".",".","4",".",".",".",".",".","."],
 [".",".",".","1",".",".","7",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".",".","3",".",".",".","6","."],
 [".",".",".",".",".","6",".","9","."],
 [".",".",".",".","1",".",".",".","."],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","8",".",".",".",".","."]]) == false);

console.log(sudoku2([[".",".","5",".",".",".",".",".","."],
 [".",".",".","8",".",".",".","3","."],
 [".","5",".",".","2",".",".",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","9"],
 [".",".",".",".",".",".","4",".","."],
 [".",".",".",".",".",".",".",".","7"],
 [".","1",".",".",".",".",".",".","."],
 ["2","4",".",".",".",".","9",".","."]]) == false);

console.log(sudoku2([[".",".",".",".",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".","9",".",".",".",".",".",".","1"],
 ["8",".",".",".",".",".",".",".","."],
 [".","9","9","3","5","7",".",".","."],
 [".",".",".",".",".",".",".","4","."],
 [".",".",".","8",".",".",".",".","."],
 [".","1",".",".",".",".","4",".","9"],
 [".",".",".","5",".","4",".",".","."]]) == false);

console.log(sudoku2([[".",".",".","2",".",".","6",".","."],
 [".",".",".","1",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".",".","5",".","1",".",".","8"],
 [".","3",".",".",".",".",".",".","."],
 [".",".",".","9",".",".",".",".","3"],
 ["4",".",".",".",".",".",".",".","."],
 [".",".",".",".",".",".","3","8","."],
 [".",".",".",".",".",".",".",".","4"]]) == true);

console.log(sudoku2([[".",".",".",".","8",".",".",".","."],
 [".",".",".",".",".",".","5",".","."],
 [".",".",".",".","4",".",".","2","."],
 [".",".",".","3",".","9",".",".","."],
 [".",".","1","8",".",".","9",".","."],
 [".",".",".",".",".","5","1",".","."],
 [".",".","3",".",".","8",".",".","."],
 [".","1","2",".","3",".",".",".","."],
 [".",".",".",".",".","7",".",".","1"]]) == true);

console.log(sudoku2([[".",".",".",".",".",".","5",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","."],
 ["9","3",".",".","2",".","4",".","."],
 [".",".","7",".",".",".","3",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".",".","3","4",".",".",".","."],
 [".",".",".",".",".","3",".",".","."],
 [".",".",".",".",".","5","2",".","."]]) == false);
console.log(sudoku2([[".",".",".",".","4",".","9",".","."],
 [".",".","2","1",".",".","3",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","3"],
 [".",".",".","2",".",".",".",".","."],
 [".",".",".",".",".","7",".",".","."],
 [".",".",".","6","1",".",".",".","."],
 [".",".","9",".",".",".",".",".","."],
 [".",".",".",".",".",".",".","9","."]]) == true);

console.log(sudoku2([[".","8","7","6","5","4","3","2","1"],
 ["2",".",".",".",".",".",".",".","."],
 ["3",".",".",".",".",".",".",".","."],
 ["4",".",".",".",".",".",".",".","."],
 ["5",".",".",".",".",".",".",".","."],
 ["6",".",".",".",".",".",".",".","."],
 ["7",".",".",".",".",".",".",".","."],
 ["8",".",".",".",".",".",".",".","."],
 ["9",".",".",".",".",".",".",".","."]]) == true);

console.log(sudoku2([[".",".",".",".",".",".",".",".","."],
 ["4",".",".",".",".",".",".",".","."],
 [".",".",".",".",".",".","6",".","."],
 [".",".",".","3","8",".",".",".","."],
 [".","5",".",".",".","6",".",".","1"],
 ["8",".",".",".",".",".",".","6","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".","7",".","9",".",".",".","."],
 [".",".",".","6",".",".",".",".","."]]) == true);

console.log(sudoku2([[".",".",".",".",".",".",".",".","1"],
 [".",".",".",".",".","6",".",".","."],
 ["4",".",".",".",".",".","3","8","."],
 ["7",".",".",".",".",".",".",".","."],
 [".",".",".",".","5","3",".",".","."],
 [".",".",".",".","6","8",".",".","."],
 ["3",".",".","9",".",".",".",".","."],
 [".",".",".",".",".","2","1","1","."],
 [".",".",".",".",".",".",".",".","."]]) == false);

console.log(sudoku2([[".","8",".",".",".",".",".",".","."],
 [".",".",".",".","2",".",".",".","."],
 [".","6",".",".",".",".","1",".","4"],
 [".",".",".","9",".",".","7",".","."],
 [".",".",".",".",".",".",".","4","."],
 [".",".","1",".",".","8",".",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".",".",".",".","5",".","7","."],
 [".",".","3",".",".","5","6",".","."]]) == false);

console.log(sudoku2([[".",".",".",".",".",".",".",".","."],
 [".",".","2",".",".",".",".",".","."],
 [".",".",".",".",".","2","7","1","."],
 [".",".",".",".",".",".",".",".","."],
 [".","2",".",".",".",".",".",".","."],
 [".","5",".",".",".",".",".",".","."],
 [".",".",".",".","9",".",".",".","8"],
 [".",".",".",".",".","1","6",".","."],
 [".",".",".",".","6",".",".",".","."]]) == true);

console.log(sudoku2([[".",".",".","9",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".","3",".",".",".",".",".","1"],
 [".",".",".",".",".",".",".",".","."],
 ["1",".",".",".",".",".","3",".","."],
 [".",".",".",".","2",".","6",".","."],
 [".","9",".",".",".",".",".","7","."],
 [".",".",".",".",".",".",".",".","."],
 ["8",".",".","8",".",".",".",".","."]]) == false);

console.log(sudoku2([[".",".",".",".",".",".","8","3","."],
 ["2",".",".",".",".",".",".",".","."],
 ["7",".",".",".",".","7",".","9","5"],
 [".",".",".","1",".",".",".",".","2"],
 [".","8",".","9",".",".",".",".","."],
 [".",".","5","1","9",".",".",".","."],
 ["5",".",".",".",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","."]]) == false);
