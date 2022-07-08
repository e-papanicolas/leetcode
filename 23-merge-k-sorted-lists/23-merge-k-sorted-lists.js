/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    
    const merge = (l1, l2) => {
        const temp = new ListNode(0);
        let current = temp;
        
        while(l1 && l2) {
            if(l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        
        if(l1) current.next = l1;
        if(l2) current.next = l2;
        
        return temp.next;
    }
    
    let root = lists[0];
    
    for(let i = 1; i < lists.length; i++) {
        root = merge(root, lists[i]);
    }
    
    return root || null;
};