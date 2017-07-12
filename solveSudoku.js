function printGrid(arr) {
  for (let q = 0; q < 9; q++) {
    let row = [];
    for (let p = 0; p < 9; p++) {
      row.push(arr[q][p]);
    }
    console.log(String(row).replace(/,/g, " "));
  }
}

function findEmptyLocation(arr, l) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (arr[row][col] == 0) {
        l[0] = row;
        l[1] = col;
        return true;
      }
    }
  }

  return false;
}

function usedInRow(arr, row, num) {
  for (let i = 0; i < 9; i++) {
    if (arr[row][i] == num) {
      return true;
    }
  }

  return false;
}

function usedInCol(arr, col, num) {
  for (let j = 0; j < 9; j++) {
    if (arr[j][col] == num) {
      return true;
    }
  }

  return false;
}

function usedInSquare(arr, row, col, num) {
  for (let l = 0; l < 3; l++) {
    for (let m = 0; m < 3; m++) {
      if (arr[row + l][col + m] == num) {
        return true;
      }
    }
  }

  return false;
}

function checkLocationIsSafe(arr, row, col, num) {
  return (!usedInRow(arr, row, num) && !usedInCol(arr, col, num) && !usedInSquare(arr, row - (row % 3), col - (col % 3), num));
}

function solveSudoku(arr) {
  l = [0, 0];
  // console.log(arr);

  if (!findEmptyLocation(arr, l)) {
    return true;
  }

  row = l[0];
  col = l[1];

  for (let k = 1; k < 10; k++) {
    if (checkLocationIsSafe(arr, row, col, k)) {
      arr[row][col] = k;

      if (solveSudoku(arr)) {
        return true;
      }

      arr[row][col] = 0;
    }
  }

  return false;
}

let grid = [[3,0,6,5,0,8,4,0,0],
            [5,2,0,0,0,0,0,0,0],
            [0,8,7,0,0,0,0,3,1],
            [0,0,3,0,1,0,0,8,0],
            [9,0,0,8,6,3,0,0,5],
            [0,5,0,0,9,0,6,0,0],
            [1,3,0,0,0,0,2,5,0],
            [0,0,0,0,0,0,0,7,4],
            [0,0,5,2,0,6,3,0,0]];

if (solveSudoku(grid) == true) {
  console.log("true");
  console.log(printGrid(grid));
} else {
  console.log("false");
  console.log(solveSudoku(grid));
  console.log(printGrid(grid));
  console.log("No solution exists.");
}
