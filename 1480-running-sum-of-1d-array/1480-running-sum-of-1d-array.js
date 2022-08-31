/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result = [nums[0]];
    
    let current = nums[0];
    let temp;
    
    for(let i = 1; i < nums.length; i++) {
        temp = nums[i];
        temp += current;
        result.push(temp);
        current = temp;
    }
    
    return result;
};