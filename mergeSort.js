function mergeSort(arr, callback) {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);
  let leftSorted = mergeSort(left);
  let rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted, callback);
}

function merge(arr1, arr2, callback) {
  callback ||= function(num1, num2) {
    if (num1 < num2) {
      return -1;
    }
  }
}
