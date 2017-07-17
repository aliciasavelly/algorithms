function mergeSort(arr, callback) {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);
  let leftSorted = mergeSort(left, callback);
  let rightSorted = mergeSort(right, callback);

  return merge(leftSorted, rightSorted, callback);
}

function merge(arr1, arr2, callback) {
  callback = callback || function(num1, num2) {
    if (num1 < num2) {
      return -1;
    }
  }

  let result = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (callback(arr1, arr2) === -1) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return result.concat(arr1).concat(arr2);
}

console.log(mergeSort([3, 2, 1, 2, 3, 6, 9, 1, 2, 3]));
