/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let n = edges.length;
    let parent = new Array(n + 1).fill(0).map((_, index) => index);
    let size = new Array(n + 1).fill(1);
    
    const find = (node) => {
        let p = parent[node];
        while(p !== parent[p]) {
            parent[p] = parent[parent[p]];
            p = parent[p];
        }
        return p;
    }
    
    const union = (n1, n2) => {
        let p1 = find(n1);
        let p2 = find(n2);
        
        if(p1 === p2) return false;
        
        if(size[p1] > size[p2]) {
            parent[p2] = p1;
            size[p1] += size[p2];
        } else {
            parent[p1] = p2;
            size[p2] += size[p1];
        }
        return true;
    }
    
    for(let [n1, n2] of edges) {
        if(!union(n1, n2)) return [n1, n2];
    }
};