/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let map = new Map();
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) {
            nums[i] = -Infinity;
            count++;
        } else {
            map.set(nums[i]);
        }
    }
    nums.sort((a, b) => a - b);
    nums.splice(0, count);
};