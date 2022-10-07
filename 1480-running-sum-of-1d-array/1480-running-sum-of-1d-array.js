/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const result = [];
    
    let current = 0;
    
    for(let i = 0; i < nums.length; i++) {
        let sum = current + nums[i];
        result.push(sum);
        current = sum;
    }
    
    return result;
};