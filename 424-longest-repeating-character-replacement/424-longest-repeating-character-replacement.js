/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let result = 0;
    let maxFreq = 0;
    let count = {};
    let left = 0;
    
    for(let right = 0; right < s.length; right++) {
        count[s[right]] = count[s[right]] + 1 || 1;
        maxFreq = Math.max(maxFreq, count[s[right]]);
        
        if ((right - left + 1) - maxFreq > k) {
            count[s[left]] -= 1;
            left += 1;
        }
        result = Math.max(result, right - left + 1);
    }
    return result;  
};