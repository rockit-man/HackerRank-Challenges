/* Day 3: Arrays */

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let largestNum = Math.max(...nums);
    let largestNumIndex = nums.indexOf(largestNum);
    nums.splice(largestNumIndex, largestNumIndex);
    return Math.max(...nums);
}