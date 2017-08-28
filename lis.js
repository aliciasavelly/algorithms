function longestIncreasingSubsequence(arr) {
  let dynamicArr = [];
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    dynamicArr.push(1);
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dynamicArr[j] >= dynamicArr[i]) {
        dynamicArr[i] = dynamicArr[j] + 1;
      }
    }
  }
  console.log(dynamicArr);
  let max = -Infinity;

  for (let i = 0; i < len; i++) {
    // console.log(max);
    // console.log(dynamicArr);
    max = Math.max(max, dynamicArr[i]);
  }

  return max;
}

console.log(longestIncreasingSubsequence([3, 10, 2, 1, 20]));
console.log(longestIncreasingSubsequence([3, 2]));
console.log(longestIncreasingSubsequence([50, 3, 10, 7, 40, 80]));
