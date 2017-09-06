function twoToOne(arr1, arr2) {
  result = [];

  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  return result;
}

console.log(twoToOne([1, 3, 4, 4, 5, 6, 7], [1, 2, 3, 5, 6, 9, 10, 11, 12, 13, 13]));
