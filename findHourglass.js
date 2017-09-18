function findHourglasses(matrix) {
  let sum = 0;
  let greatest = -Infinity;

  for (let i = 0; i < matrix[0].length - 2; i++) {
    for (let j = 0; j < matrix.length - 2; j++) {
      sum += matrix[i][j];
      sum += matrix[i][j + 1];
      sum += matrix[i][j + 2];
      sum += matrix[i + 2][j];
      sum += matrix[i + 2][j + 1];
      sum += matrix[i + 2][j + 2];
      sum += matrix[i + 1][j + 1];

      if (sum > greatest) {
          greatest = sum;
      }

      sum = 0;
    }
  }

  return greatest;
}

console.log(findHourglasses([ [ 1, 1, 1, 0, 0, 0 ],
                              [ 0, 1, 0, 0, 0, 0 ],
                              [ 1, 1, 1, 0, 0, 0 ],
                              [ 0, 9, 2, -4, -4, 0 ],
                              [ 0, 0, 0, -2, 0, 0 ],
                              [ 0, 0, -1, -2, -4, 0 ] ]) == 13);
