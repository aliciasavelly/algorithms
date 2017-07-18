function quickSort(arr, comparator) {
  if (arr.length <= 1) {
    return arr;
  }

  if (typeof comparator !== 'function') {
    comparator = (x, y) => {
      if (x === y) {
        return 0;
      } else if (x < y) {
        return -1;
      } else {
        return 1;
      }
    };
  }

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (comparator(arr[i], pivot) === -1) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left, comparator).concat([pivot]).concat(quickSort(right, comparator));
}

console.log(quickSort([3, 2, 1, 2, 3, 6, 9, 1, 2, 3]));
