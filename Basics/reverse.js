function reverseNumber(x) {
    let reversed = 0;
    
    while (x !== 0) {
        const digit = x % 10;
        reversed = reversed * 10 + digit;
        x = (x - digit) / 10; // Move to the next digit by removing the last digit
    }
    
    return reversed;
}

console.log(reverseNumber(123));