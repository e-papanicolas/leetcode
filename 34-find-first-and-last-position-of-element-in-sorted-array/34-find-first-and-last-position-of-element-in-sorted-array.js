/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = -1, second = -1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== target){
            continue;
        }
        else {
            if(first === -1) first = i;
            second = i;
        }
    }
    return [first, second];
};