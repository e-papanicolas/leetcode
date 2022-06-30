/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid = Math.floor((start + end) / 2);
    
    while(nums[mid] !== target && start < end) {
        if(nums[mid] < target) start = mid + 1;
        else end = Math.max(0, (mid - 1));
        mid = Math.floor((start + end) / 2);
        console.log(start, end, mid)
    }
    
    if (target > nums[mid]) return mid + 1;
    else return mid;
    
};