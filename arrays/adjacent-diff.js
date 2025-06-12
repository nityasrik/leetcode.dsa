/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
    const n = nums.length;
    let diff = Math.abs(nums[0] - nums[n - 1]);
    for (let i = 0; i < n - 1; i++) {
        diff = Math.max(diff, Math.abs(nums[i] - nums[i + 1]));
    }
    return diff;
};