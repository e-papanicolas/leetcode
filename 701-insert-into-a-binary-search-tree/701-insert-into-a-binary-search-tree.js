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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    let newNode = new TreeNode(val);
    if(root === null) {
        root = newNode;
        return root;
    }
    let current = root;
    while(true) {
        if(val === current.val) return undefined;
        if(val < current.val) {
            if(current.left === null) {
                current.left = newNode;
                return root;   
            } else {
                current = current.left;
            }
        } else if (val > current.val) {
            if(current.right === null) {
                current.right = newNode;
                return root;
            } else {
                current = current.right;
            }
        }
    }
};