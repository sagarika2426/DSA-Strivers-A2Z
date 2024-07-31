// Pattern-2: Right-Angled Triangle Pattern
// Input Format: N = 3
// Result: 
// * 
// * * 
// * * *

function pattern(n){
    for(var i = 0; i<n; i++){
        var row = "";
        for(var j = 0; j< i; j++){
            row = row + "*"
        }
        console.log(row)
    }
}
pattern(4);

// Pattern - 3: Right-Angled Number Pyramid
// Input Format: N = 3
// Result: 
// 1
// 1 2 
// 1 2 3
function pattern2(n){
    for(var i = 1; i<=n; i++){
        var row = "";
        for(var j = 1; j<= i; j++){
            row = row + j
        }
        console.log(row)
    }
}
pattern2(4);


// Pattern - 4: Right-Angled Number Pyramid - II
// Input Format: N = 3
// Result: 
// 1
// 2 2 
// 3 3 3
function pattern3(n){
    for(var i = 1; i<=n; i++){
        var row = "";
        for(var j = 1; j<= i; j++){
            row = row + i
        }
        console.log(row)
    }
}
pattern3(4);



// Pattern-5: Inverted Right Pyramid

// Input Format: N = 3
// Result: 
// * * *
// * * 
// *
function pattern4(n) {
    for(var i = 1; i<= n; i++){
        let row = "";
        for(var j = 0; j< n-i+1; j++){
            row = row + "*"
        }
        console.log(row);
    }
}
pattern4(4);


// Pattern - 6: Inverted Numbered Right Pyramid
// Input Format: N = 3
// Result: 
// 1 2 3
// 1 2
// 1
function pattern5(n){
    for(var i = 1; i<= n; i++){
        let row = "";
        for(var j = 1; j<= n-i+1; j++){
            row = row + j
        }
        console.log(row);
    }
    
}
pattern5(3);


// Pattern - 10: Half Diamond Star Pattern
// Input Format: N = 3
// Result: 
//   *  
//   **
//   ***  
//   **
//   *  


function halfDiamondStar(n){
    for(let i = 1; i<=n ; i++){
        let star = "";
        for(let j = 0; j<i; j++){
            star +="*"
        }
        console.log(star);
    }
    for(let i = n-1; i>=0; i--){
        let star = "";
        for(let j = 0; j<i; j++){
            star +="*"
        }
        console.log(star);
    }
}

halfDiamondStar(4);