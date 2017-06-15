function findMedianSortedArrays(nums1, nums2) {
  let totalEls = nums1.length + nums2.length;
  let midIdx;
  let count = 0;
  let result = 0;
  let current = 0;
  let i = 0;
  let j = 0;

  midIdx = (totalEls % 2 === 0 ? [totalEls / 2 - 1, totalEls / 2 ] :
                                 [Math.floor(totalEls / 2)])

  while (count <= midIdx[0]) {
    if (!nums1[i] || nums2[j] < nums1[i]) {
      current = nums2[j];
      j++;
    } else if (!nums2[j] || nums1[i] <= nums2[j]) {
      current = nums1[i];
      i++
    }

    count++;
  }

  if (midIdx.length == 2) {
    if (nums1[i] && nums2[i]) {
      result += Math.min(nums1[i], nums2[j]);
    } else {
      result += (nums1[i] ? nums1[i] : nums2[j]);
    }
    return (result + current) / 2;
  }

  return current;
};

console.log(findMedianSortedArrays([1, 3], [2]) === 2);
console.log(findMedianSortedArrays([1, 2], [3, 4]) === 2.5);
console.log(findMedianSortedArrays([1, 9], [1, 2, 7, 10]) === 4.5);
console.log(findMedianSortedArrays([1, 4], [2, 3, 6, 7, 9]) === 4);
