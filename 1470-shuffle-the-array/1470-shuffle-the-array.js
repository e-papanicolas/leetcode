/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr1 = nums.slice(0, n);
    let arr2 = nums.slice(n, nums.length);
    
    let arr3 = [];
    
    for(let i = 0; i < n; i++) {
        arr3.push(arr1[i]);
        arr3.push(arr2[i]);
    }
    
    return arr3;
};