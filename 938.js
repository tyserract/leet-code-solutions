/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let sum =0
   sum = bstSun(sum, L, R, root)
    return sum
};


var bstSun = function(sum, L, R, node) {
    if(node !== null) {
        if(node.val<=R&&node.val>=L){
            sum += node.val
        }
        sum = bstSun(sum, L, R, node.left)
        sum = bstSun(sum, L, R, node.right)
    }
    return sum
} 
