var findMedianSortedArrays = function(nums1, nums2) {
    var midIdx;
    var totalEls = nums1 + nums2;
    var count = 0;
    var result = 0;

    if (totalEls % 2 === 0) {
        midIdx = [totalEls / 2 - 1, totalEls / 2 ];
    } else {
        midIdx = [Math.floor(totalEls / 2)];
    }

    let i = 0;
    let j = 0;
    let current = 0;
    while (count <= midIdx[midIdx.length - 1]) {
        if (nums1[i] === undefined) {
            current = nums2[j];
            j++;
        } else if (nums2[j] === undefined) {
            current = nums1[i];
            i++
        } else if (nums1[i] <= nums2[j]) {
            current = nums1[i];
            i++;
        } else if (nums2[j] < nums1[j]) {
            current = nums2[j];
            j++;
        }

        if (count == midIdx[0]) {
            if (midIdx.length == 1) {
