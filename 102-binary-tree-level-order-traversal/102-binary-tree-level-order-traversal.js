/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    
    let result = [];
    let queue = [root];
    
    while(queue.length) {
        const temp = [];
        let num = queue.length;
        for(let i = 0; i < num; i++){
            let visited = queue.shift();
            temp.push(visited.val);
            if(visited.left) queue.push(visited.left);
            if(visited.right) queue.push(visited.right);
        }
        result.push(temp);
    }
    return result;
};