/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while(left < right) {
        while(left < right && !isAlphaNumeric(s[left])) {
            left += 1;
        }
        
        while(left < right && !isAlphaNumeric(s[right])) {
            right -= 1;
        }
        
        if(s[left].toLowerCase() !== s[right].toLowerCase()) return false;
        
        left ++;
        right--;
    }
    return true;
};

function isAlphaNumeric(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return true;
};