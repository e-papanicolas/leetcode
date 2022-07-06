/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {};
    
    for(let num of nums) {
        if(map[num]) map[num]++;
        else map[num] = 1;
    }
    
    for(let [key, val] of Object.entries(map)){
        if(val === 1) return key;
    }
};