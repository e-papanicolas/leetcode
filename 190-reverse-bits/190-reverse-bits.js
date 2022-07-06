/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let reversed = 0;
    
    for(let i = 0; i < 32; i++) {
        let bit = (n >> i) & 1;
        reversed = reversed | (bit << (31 - i));
    }
    
    return reversed >>> 0;
};