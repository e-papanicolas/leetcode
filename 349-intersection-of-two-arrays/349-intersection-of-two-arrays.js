/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let s1 = new Set(nums1);
    let s2 = new Set(nums2);
    
    return [...s1].filter(n => s2.has(n));
};