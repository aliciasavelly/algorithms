function getSecondLargest(nums) {
  let highest = nums[0];
  let second = -Infinity;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > highest) {
      second = highest;
      highest = nums[i];
    } else if (nums[i] < highest && nums[i] > second) {
      second = nums[i];
    }
  }

  return second;
}
