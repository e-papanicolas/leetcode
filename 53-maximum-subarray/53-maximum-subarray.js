/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let tempSum = 0;
    
    for(let num of nums) {
        if(tempSum < 0) tempSum = 0;
        tempSum += num;
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}