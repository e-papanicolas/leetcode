/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set(nums);
    console.log(nums);
    console.log(set)
    return nums.length !== set.size;
};