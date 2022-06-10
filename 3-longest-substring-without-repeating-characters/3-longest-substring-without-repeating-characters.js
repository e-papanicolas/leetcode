/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let currentLen = 0;
    let longestLen = 0;
    
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(map.get(char) >= currentLen) {
            currentLen = map.get(char) + 1;
        }
        map.set(char, i);
        longestLen = Math.max(longestLen, i - currentLen + 1)
    }
    return longestLen;
};