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
