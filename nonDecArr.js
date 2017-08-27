var checkPossibility = function(nums) {
  let count = 0;
  let last = nums[0];
  let recentVal = nums[0];

  for (let i = 0; i < nums.length - 1; i++) {
    if (count > 1) {
      return false;
    }
    if (last > nums[i + 1]) {
      count++;
      last = i === 0 ? nums[i + 1] : nums[i - 1];
      i--;

    } else {
      last = nums[i + 1];
      // recentVal = last;
    }
  }

  return count <= 1;

  // let last = nums[0];
  // let count = 0;
  // for (let i = 1; i < nums.length; i++) {
  //   if (count > 1) {
  //     return false;
  //   }
  //
  //   if (last > nums[i] && nums[i] > nums[i + 1]) {
  //     last = nums[i];
  //     count++;
  //   }
  // }
  //
  // return count <= 1;
};

console.log(checkPossibility([4,2,3]));
console.log(checkPossibility([4,2,1]));
console.log(checkPossibility([3,4,2,3]));
console.log(checkPossibility([2,3,3,2,4]));
console.log(checkPossibility([4,2,3]) === true);
console.log(checkPossibility([4,2,1]) === false);
console.log(checkPossibility([3,4,2,3]) === false);
console.log(checkPossibility([2,3,3,2,4]) === true);
