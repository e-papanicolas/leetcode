/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    strs = strs.sort((a, b) => a.length - b.length);
    let str = "";
    
    for(let i = 0; i < strs[0].length; i++) {
        let letter = strs[0].charAt(i);
        let add = true;
        
        for(let j = 1; j < strs.length; j++) {
            if(strs[j].charAt(i) !== letter) {
                add = false;
                break;
            }
        }
        
        if(add === false) break;
        (str += letter)
    }
    return str;
};