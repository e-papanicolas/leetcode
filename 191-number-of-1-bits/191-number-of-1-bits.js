/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let total = 0;
    
    while(n) {
        total += n % 2
        n = n >>> 1
    }
    
    return total;
};