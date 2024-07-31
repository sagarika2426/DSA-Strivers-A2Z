function isArmstrong(number){ //
    let numofDigit = String(number).length;
    let sum = 0
    let temp = number;

    while(temp>0){
        const digit = temp%10;
        sum += Math.pow(digit, numofDigit);
        temp = Math.floor(temp/10)
    }
    return( sum === number)
   
}
const number=153;
if(isArmstrong(number)){
    console.log(("Yes"));
}
else{
    console.log("No");
}



//number: 234
//temp=234
//1. digit=3, sum = 3^3 = 27, temp = 23
//2. digit= 3, sum = 27, temp = 2
//3. digit = 2, sum = 6 , temp = 0

