function validSolution(board) {
  if (!validRows(board)) {
    return false;
  }

  let newBoard = transposeCols(board);
  if (!validRows(newBoard)) {
    return false;
  }

  if (!validSquares(board)) {
    return false;
  }

  return true;
}

function validRows(board) {
  board.forEach( row => {
    let total = 0;
    let rowSet = new Set();

    row.forEach( col => {
      if (col < 1 || col > 9) {
        return false;
      }
      total += col;
      rowSet.add(col);
    });

    if (total != 45) {
      return false;
    }
    for (let i = 1; i <= 9; i++) {
      if (!rowSet.has(i)) {
        return false;
      }
    }
  });

  return true;
}

function transposeCols(board) {
  let result = [];

  for (let col = 0; col < 9; col++) {
    result.push([]);
    for (let row = 0; row < 9; row++) {
      result[col].push(board[row][col]);
    }
  }

  return result;
}

function validSquares(board) {
  let pos = [0, 0];

  while (pos[0] < 9 && pos[1] < 9) {
    let total = 0;
    let squareSet = new Set();

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        let val = board[row + pos[0]][col + pos[1]];
        if (val < 1 || val > 9) {
          return false;
        }

        total += val;
        squareSet.add(val);
      }
    }

    if (total != 45) {
      return false;
    }

    for (let k = 1; k <= 9; k++) {
      if (!squareSet.has(k)) {
        return false;
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
