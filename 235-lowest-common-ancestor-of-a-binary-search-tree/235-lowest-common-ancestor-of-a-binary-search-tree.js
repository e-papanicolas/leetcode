/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    let lca = root.val;
    
    let pVal = p.val;
    let qVal = q.val;
    
    if(pVal > lca && qVal > lca) {
        return lowestCommonAncestor(root.right, p, q);
    } else if (pVal < lca && qVal < lca) {
        return lowestCommonAncestor(root.left, p, q);
    } else {
        return root;
    }
    
};