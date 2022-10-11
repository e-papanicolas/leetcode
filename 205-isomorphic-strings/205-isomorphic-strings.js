/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
   
    let mapSToT = {};
    let mapTToS = {};
    
    for(let i = 0; i < s.length; i++) {
        let char1 = s.charAt(i);
        let char2 = t.charAt(i);
        
        if(!mapSToT[char1] && !mapTToS[char2]) {
            mapSToT[char1] = char2;
            mapTToS[char2] = char1;
        } else if (mapSToT[char1] !== char2 || mapTToS[char2] !== char1) {
            return false;
        }
    }
    
    return true;
};