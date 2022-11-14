/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    if(s.length > t.length) return false;
    
    let sIdx = 0;
    
    for(let i = 0; i < t.length; i++) {
        if(s[sIdx] === t[i]) {
            sIdx++;
        } else {
            continue;
        }
    }
    
    return sIdx >= s.length;
};