/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length === 0 || s.length % 2 !== 0) return false;
    let stack = [];
    let parens = {
        "[": "]",
        "{": "}",
        "(": ")"
    }
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] in parens) {
            stack.push(s[i])
        } else if (s[i] !== parens[stack.pop()]) {
            return false;
        }
    }
    
    return stack.length === 0;
};