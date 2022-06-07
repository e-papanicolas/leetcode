/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    function logData(tree) {
        if(tree === null) return [];
        let data = [];
        let current = tree;
    
        function traverse(node) {
            data.push(node === null ? null : node.val);
            node.left ? traverse(node.left) : data.push(null)
            node.right ? traverse(node.right) : data.push(null)
        }
        traverse(tree);
        return data;
    }
    
    let first = logData(p);
    let second = logData(q);
    if(first.length !== second.length) return false;
    
    for(let i = 0; i < first.length; i++) {
        if(first[i] !== second[i]) return false;
    }
    
    return true;

};