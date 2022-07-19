/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    if(numRows === 0) return result;
    
    result.push([1]);
    let prev = [];
    
    while(result.length < numRows) {
        let temp = [];
        temp[0] = 1;
        
        for(let i = 0; i < prev.length - 1; i++) {
            temp[i + 1] = prev[i] + prev[i + 1];
        }
        
        temp.push(1);
        result.push(temp);
        prev = temp;
    }
   return result; 
};