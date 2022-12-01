/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let mid = s.length / 2;
    
    let a = s.slice(0, mid);
    let b = s.slice(mid)
    
    let aMatches = 0; 
    let bMatches = 0;
    
    const letters = 'aeiouAEIOU'
    
    for(let char of a) {
        if(letters.includes(char)) aMatches++;
    }
    
    for(let char of b) {
        if(letters.includes(char)) bMatches++;
    }
    
    return aMatches === bMatches;
};