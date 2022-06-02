/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let newMatrix = [];
    for(let i = 0; i < matrix[0].length; i++) {
        let temp = [];
        for(let j = 0; j < matrix.length; j++) {
            temp.push(matrix[j][i]);
        }
        newMatrix.push(temp);
    }
    return newMatrix;
};