function printGrid(arr) {

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
  for (let i = 0; i < 9; i++) {
    if (arr[i][col] == num) {
      return true;
    }
  }

  return false;
}

function usedInSquare(arr, row, col, num) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (arr[row + i][col + j] == num) {
        return true;
      }
    }
  }

  return false;
}

function checkLocationIsSafe(arr, row, col, num) {
  return (!usedInRow(arr, row, num) && !usedInCol(arr, col, num) && !usedInSquare(arr, row, col, num));
}

function solveSudoku(arr) {
  l = [0, 0];

  if (!findEmptyLocation(arr, l)) {
    return true;
  }

  row = l[0];
  col = l[1];

  for (var i = 1; i < 10; i++) {
    if (checkLocationIsSafe(arr, row, col, i)) {
      arr[row][col] = i;

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

if (solveSudoku(grid)) {
  console.log(grid);
} else {
  console.log("No solution exists.");
}
