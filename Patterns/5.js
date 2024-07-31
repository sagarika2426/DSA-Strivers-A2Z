// Pattern - 13: Increasing Number Triangle Pattern
// Input Format: N = 3
// Result: 
// 1
// 2 3
// 4 5 6

function increaseNum(n){
    let num =1
    for(let i =1; i<=n; i++){
        let row = "";
        for(let j = 1; j<=i; j++){
            row += num + " ";
            num++
        }
        console.log(row);
        
    }
}
increaseNum(6);