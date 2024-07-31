var isPalindrome = function(x) {
    const numStr = String(x);
    
    // Reverse the string
    const reversedStr = numStr.split('').reverse().join('');
    
    // Check if the original string is equal to the reversed string
    if (numStr === reversedStr) {
        console.log("true");
    } else {
        console.log("false");
    }
};

isPalindrome(123)