/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    
    let sLen = s.length;
    let pLen = p.length;
    
    if(sLen < pLen) return [];
    
    let pCount = new Array(26).fill(0);
    let sCount = new Array(26).fill(0);
    let aCode = 'a'.charCodeAt(0);
    
    for(let char in p) {
        pCount[p.charCodeAt(char) - aCode] += 1;
    }
    
    let result = [];
    
    for(let i = 0; i < sLen; i++) {
        sCount[s.charCodeAt(i) - aCode] += 1;
        if(i >= pLen) {
            sCount[s.charCodeAt(i - pLen) - aCode] -= 1;
        }
        
        if(pCount.toString() === sCount.toString()) {
            result.push(i - pLen + 1)
        }
    }
    
    return result;
};