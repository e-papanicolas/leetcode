/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let results = [];
    let i = 0;
    let j = 0;
    
    while(i < nums1.length && j < nums2.length) {
        if(nums2[j] > nums1[i]) {
            results.push(nums1[i]);
            i++;
        } else {
            results.push(nums2[j]);
            j++;
        }
    }
    
    while(i < nums1.length) {
        results.push(nums1[i]);
        i++;
    }
    
    while(j < nums2.length) {
        results.push(nums2[j]);
        j++;
    }
    
    let median;
    
    if(results.length % 2 === 0) {
        // even amount of items means take middle 2 elements and average them
        let firstIdx = Math.floor(results.length / 2);
        let secondIdx = firstIdx - 1;
        median = (results[firstIdx] + results[secondIdx]) / 2;
        
        
    } else {
        let idxAtMedian = Math.floor(results.length / 2);
        median = results[idxAtMedian];
    }
    
    return median;
};