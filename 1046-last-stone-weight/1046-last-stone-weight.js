/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    
    if(stones.length < 2) return stones;
    
    stones = stones.sort((a, b) => a - b);
    
    let x = stones.pop();
    let y = stones.pop();
    
    stones.push(Math.abs(x - y));
    
    return lastStoneWeight(stones);   
};