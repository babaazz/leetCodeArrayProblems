// Problem -1

// Given a zero-based permutation nums (0-indexed), build an array ans of the same length
// where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

// Example 1:

// Input: nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
//     = [0,1,2,4,5,3]
// Example 2:

// Input: nums = [5,0,1,2,3,4]
// Output: [4,5,0,1,2,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
//     = [4,5,0,1,2,3]

// Constraints:

// 1 <= nums.length <= 1000
// 0 <= nums[i] < nums.length
// The elements in nums are distinct.

// Can you solve it without using an extra space (i.e., O(1) memory)?

const buildArray = (nums) => nums.map((el) => nums[el]);

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

const findMedianOfTwoSortedArray = (arr1, arr2) => {
  let bigArr, smallArr;
  arr1.length >= arr2.length
    ? ([bigArr, smallArr] = [arr1, arr2])
    : ([bigArr, smallArr] = [arr2, arr1]);

  let total = arr1.length + arr2.length;
  let half = Math.floor(total / 2);
  let left = 0;
  let right = smallArr.length - 1;
  while (true) {
    let midOfSmall = Math.floor((left + right) / 2);
    let midOfBig = half - midOfSmall - 2;
    let leftOfSmall, rightOfSmall, leftOfBig, rightOfBig;
    midOfSmall >= 0
      ? (leftOfSmall = smallArr[midOfSmall])
      : (leftOfSmall = -Infinity);
    midOfSmall + 1 < smallArr.length
      ? (rightOfSmall = smallArr[midOfSmall + 1])
      : (rightOfSmall = Infinity);
    midOfBig >= 0 ? (leftOfBig = bigArr[midOfBig]) : (leftOfBig = -Infinity);
    midOfBig + 1 < bigArr.length
      ? (rightOfBig = bigArr[midOfBig + 1])
      : (rightOfBig = Infinity);
    if (leftOfSmall <= rightOfBig && leftOfBig <= rightOfSmall) {
      if (total % 2 === 1) return Math.min(rightOfSmall, rightOfBig);
      return (
        (Math.max(leftOfSmall, leftOfBig) +
          Math.min(rightOfBig, rightOfSmall)) /
        2
      );
    } else if (leftOfSmall > rightOfBig) {
      right = midOfSmall - 1;
    } else {
      left = midOfSmall + 1;
    }
  }
};

console.log(
  findMedianOfTwoSortedArray([2, 8, 11, 19, 23, 28], [3, 7, 13, 18, 27, 31, 34])
);
