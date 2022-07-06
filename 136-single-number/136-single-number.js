/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let total = 0;
    for(let num of nums) {
        total = num ^ total;
    }
    return total;
};