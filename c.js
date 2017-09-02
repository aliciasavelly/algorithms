/*
 * Complete the function below.
 */
function countGroups(m, t) {
    let positions = {};
    let rowLen = m[0].length;

    for (let i = 0; i < m.length; i++) {
        positions[i] = {};

        for (let j = 0; j < rowLen; j++) {
            positions[i][j] = false;
        }
    }

    let currentVal = 0;
    let vals = {};

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < rowLen; j++) {
            currentVal = findNeighbors(positions, m, [i, j]);
            //console.log(currentVal);
            if (vals[currentVal] != undefined) {
                vals[currentVal] += 1;
            } else {
                vals[currentVal] = 1;
            }
        }
    }

    console.log(vals);
}

function findNeighbors(positions, m, current) {
    let val = 0;

    let j = current[1];
    let i = current[0] - 1;
    if (j < m.length && j > -1 && i < m[0].length && i > -1) {
        if (!positions[i][j]) {
            positions[i][j] = true;

            if (m[i][j] === 1) {
                val += 1;
                if ((current[0] != i || current[1] != j)) {
                    val += findNeighbors(positions, m, [i, j]);
                }
            }
        }
    }

    i = current[0] + 1;
    if (j < m.length && j > -1 && i < m[0].length && i > -1) {
        if (!positions[i][j]) {
            positions[i][j] = true;

            if (m[i][j] === 1) {
                val += 1;
                if (current[0] != i || current[1] != j) {
                    val += findNeighbors(positions, m, [i, j]);
                }
            }
        }
    }

    j = current[1] - 1;
    if (j < m.length && j > -1 && i < m[0].length && i > -1) {
        if (!positions[i][j]) {
            positions[i][j] = true;

            if (m[i][j] === 1) {
                val += 1;
                if (current[0] != i || current[1] != j) {
                    val += findNeighbors(positions, m, [i, j]);
                }
            }
        }
    }

    i = current[0] - 1;
    if (j < m.length && j > -1 && i < m[0].length && i > -1) {
        if (!positions[i][j]) {
            positions[i][j] = true;

            if (m[i][j] === 1) {
                val += 1;
                if (current[0] != i || current[1] != j) {
                    val += findNeighbors(positions, m, [i, j]);
                }
            }
        }
    }

    return val;
}

let matrix = [[1, 1, 1, 0],
              [1, 0, 0, 0],
              [0, 1, 1, 0],
              [0, 0, 0, 1]];
let questions = [4, 3, 2, 1];
let result = [1, 0, 1, 1];

console.log(countGroups(matrix, questions));
