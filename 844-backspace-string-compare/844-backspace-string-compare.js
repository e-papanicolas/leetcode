/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    const backspace = (str) => {
        const hashtag = "#";
        let arr = [];
        for(let i = 0; i < str.length; i++) {
            let char = str[i];
            
            if(char !== hashtag) {
                arr.push(char);
            } else if(char === hashtag) {
                arr.pop();
            }   
        }
        return arr.toString();
    }
    
    return backspace(s) === backspace(t);
};