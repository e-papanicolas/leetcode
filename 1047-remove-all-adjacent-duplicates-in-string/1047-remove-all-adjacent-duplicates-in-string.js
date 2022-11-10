/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
   let result = [];
    
    for(let char of s) {
        if(result && char === result.at(-1)) {
            result.pop();
        } else {
            result.push(char);
        }
    }
    
    return result.join('');
};