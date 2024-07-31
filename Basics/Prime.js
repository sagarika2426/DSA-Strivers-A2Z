function isPrime(n){
    if(n <=1){
        return false;
    
    }

    for(let i =2; i<n; i++){
        if(n%i ===0){
            return false;
        }
        
    }
    return true;
}

const n = 23;
if(isPrime(n)){
    console.log("prime");
}
else{
    console.log("not Prime");
}