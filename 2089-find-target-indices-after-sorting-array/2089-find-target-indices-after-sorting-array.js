/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    for(let i = 1; i < nums.length; i++) {
        let currentVal = nums[i];
        for(var j = i - 1; j >= 0 && nums[j] > currentVal; j--) {
            nums[j + 1] = nums[j]   
        }
        nums[j + 1] = currentVal;
    }
    let indices = [];
    nums.forEach((num, index) => {
        if(num === target) {
            indices.push(index);
        }
    })
    return indices;
};