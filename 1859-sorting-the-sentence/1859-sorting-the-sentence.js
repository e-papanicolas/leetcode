/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const wordsArr = s.split(' ');
    let arrs = wordsArr.map(word => {
        return word.split('');
    });
    
    let indices = {};
    let size = 0;
    
    arrs.forEach(wordArr => {
        let index = wordArr.pop();
        indices[index] = wordArr.join('');
        size++;
    })
    
    let str = "";
    for(let i = 1; i <= size; i++){
        if(i === 1) str += indices[i];
        else str += " " + indices[i];
        
    }
    
    return str;
};