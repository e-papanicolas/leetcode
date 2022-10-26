/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
   
    let R = image.length;
    let C = image[0].length;
    let newColor = image[sr][sc];
    
    if(newColor === color) return image;
    
    const dfs = (r, c) => {
        if(image[r][c] === newColor) {
            image[r][c] = color;
            
            if(r >= 1) dfs(r - 1, c);
            if(r + 1 < R) dfs(r + 1, c);
            if(c >= 1) dfs(r, c - 1);
            if(c + 1 < C) dfs(r, c + 1);
        }
    }
    
    dfs(sr, sc);
    return image;
    
};