/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid) return 0;
    
    let nr = grid.length;
    let nc = grid[0].length;
    let numIslands = 0;
    
    for(let r = 0; r < nr; ++r) {
        for(let c = 0; c < nc; ++c) {
            if(grid[r][c] === '1') {
                ++numIslands;
                grid[r][c] = '0';
                
                let neighbors = [];
                neighbors.push(r * nc + c);
                
                while(neighbors.length) {
                    let id = neighbors.shift();
                    let row = Math.floor(id / nc);
                    let col = id % nc;
                    
                    if(row - 1 >= 0 && grid[row - 1][col] === '1') {
                        neighbors.push((row - 1) * nc + col);
                        grid[row - 1][col] = '0';
                    }
                    
                    if(row + 1 < nr && grid[row + 1][col] === '1') {
                        neighbors.push((row + 1) * nc + col);
                        grid[row + 1][col] = '0';
                    }
                    
                    if(col - 1 >= 0 && grid[row][col - 1] === '1') {
                        neighbors.push(row * nc + (col - 1));
                        grid[row][col - 1] = '0';
                    }
                    
                    if(col + 1 < nc && grid[row][col + 1] === '1') {
                        neighbors.push(row * nc + (col + 1));
                        grid[row][col + 1] = '0';
                    }
                }
            }
        }
    }
    return numIslands;
};