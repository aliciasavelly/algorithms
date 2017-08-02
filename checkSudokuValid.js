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
                        console.log(grid[row + pos[0]][col + pos[1]]);
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
