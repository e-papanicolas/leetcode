/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let s = x.toString();
    
    return x.toString() === s.split('').reverse().join('');
};