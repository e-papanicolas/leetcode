/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let letters = new Map();
    let numLetters = s.length;
    
    for(let i = 0; i < s.length; i++) {
        letters.has(s[i]) ?
            letters.set(s[i], letters.get(s[i]) + 1) : letters.set(s[i], 1);
    }
    
    let hasOddSingle = false;
    
    letters.forEach((numTimes, letter) => {
        if(numTimes % 2 !== 0) {
            if(hasOddSingle === false) hasOddSingle = true;
            else {
                letters.delete(letter);
                numLetters--;
            }
        } 
    });
    
    return numLetters;
};