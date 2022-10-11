/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    let leftBound = s.length;
    let rightBound = t.length;
    
    const isSub = (leftIdx, rightIdx) => {
        if(leftIdx === leftBound) return true;
        if(rightIdx === rightBound) return false;
        
        if(s[leftIdx] === t[rightIdx]) leftIdx += 1;
        rightIdx += 1;
        
        return isSub(leftIdx, rightIdx);
    }
    
    return isSub(0, 0);
};