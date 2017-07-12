function validSolution(board) {
  if (!validRows(board)) {
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
