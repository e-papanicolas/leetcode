
var Trie = function() {
    this.root = new TrieNode();
};

var TrieNode = function() {
    this.isEnd = false;
    this.children = new Array(26);
    for(let i = 0; i < 26; i++) {
        this.children[i] = null;
    }
}

Trie.prototype.getIndex = function(node) {
    return node.charCodeAt(0) - 'a'.charCodeAt(0);
}

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.root;
    
    for(let c of word) {
        let idx = this.getIndex(c);
        if(curr.children[idx] === null) {
            curr.children[idx] = new TrieNode();
        }
        curr = curr.children[idx];
    }
    curr.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this.root;
    
    for(let c of word) {
        let idx = this.getIndex(c);
        if(curr.children[idx] === null) {
            return false;
        }
        curr = curr.children[idx];
    }
    return curr.isEnd;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.root;
    
    for(let c of prefix) {
        let idx = this.getIndex(c);
        if(curr.children[idx] === null) {
            return false;
        }
        curr = curr.children[idx];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */