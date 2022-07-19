/**
 * @param {number[][]} grid
 * @return {number}
 */

var orangesRotting = function(grid) {
    let queue = [];
    let fresh = 0;
    let time = 0;
    
    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[0].length; c++) {
            if(grid[r][c] === 1) fresh += 1;
            if(grid[r][c] === 2) queue.unshift([r, c]);
        }
    }
    
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
   
    while(fresh > 0 && queue.length) {
        let length = queue.length;
        for(let i = 0; i < length; i++) {
            let [r, c] = queue.pop();
           
            for(let [dr, dc] of directions) {
                let row = r + dr;
                let col = c + dc;
                if(row >= 0 && row < grid.length && col >= 0 && 
                   col < grid[0].length && grid[row][col] === 1) {
                    
                    grid[row][col] = 2;
                    queue.unshift([row, col]);
                    fresh -= 1;
                }
            }
        }
        time += 1;
    }
    return fresh === 0 ? time : -1;
};