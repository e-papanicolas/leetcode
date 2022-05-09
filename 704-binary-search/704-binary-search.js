/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left + right) / 2);
    
    while(nums[mid] !== target && left < right) {
        if(target > nums[mid]) left = mid + 1;
        else right = mid - 1;
        mid = Math.floor((left + right) / 2);
    }
    return nums[mid] === target ? mid : -1;    
};