function modifyArray(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      nums[i] *= 2;
    } else {
      nums[i] *= 3;
    }
  }

  return nums;
}

console.log(modifyArray([1, 2, 3, 4, 5]));
console.log(modifyArray([4, 2, 7, 4, 5]));
