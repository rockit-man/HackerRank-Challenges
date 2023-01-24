/* Day 5: Arrow Functions */

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
const modifyArray = (nums) => {
    for (let n = 0; n < nums.length; n++) {
        if (nums[n] % 2 == 0) {
            nums[n] = nums[n] * 2;
        } else {
            nums[n] = nums[n] * 3;
        }
    }
    return nums;
}