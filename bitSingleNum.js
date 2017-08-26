function singleNumber(nums) {
  'use strict'
  let res = 0;
  for (let num of nums) {
    res ^= num;
  }
  return res;
}
