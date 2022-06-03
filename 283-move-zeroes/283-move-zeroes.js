/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(let num of nums) {
        if(num === 0) {
            nums.splice(nums.indexOf(num), 1);
            nums.push(num);
        }
    }
};