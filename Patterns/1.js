// Problem Statement: Given an integer N, print the following pattern.
// Example 1:
// Input: N = 3
// Output: 
// * * *
// * * *
// * * *

function pattern(n){
    for(let i =0; i< n; i++){
        let row = "";
        for(let j = 0; j<n; j++){
            row = row + "*"
        }
        console.log(row);

    }

}

pattern(4);


// Pattern11


function pattern11(n){
    var start = 1

    for(var i =0; i< n; i++){
        if(i%2 === 0){
            start = 1
        }
        else{
            start = 0
        }
        var row = ""
        for(var j = 0; j <= i; j++){
            row = row + start;
            start = 1 - start

        }
        console.log(row)

    }

}

pattern11(4);

// pattern12
// 1      1
// 12    21
// 123  321
// 12344321
function pattern12(n){
    let space = 2 * (n-1)
    for(var i = 1; i<=n ; i++){
        let row = ""

        // num
        for(var j = 1; j<=i; j++){
            row = row + j
        }

        // space
        for(var j = 1; j<=space; j++){
            row = row + " "
        }

        // num
        for(var j = i; j>0; j--){
            row = row + j
        }

        console.log(row)
        space = space -2 
    }
}

pattern12(4)


// Pattern 13
// 1
// 2 3
// 4 5 6

function pattern13(n){
    let num = 1;
    for( var i = 0; i < n; i++){
        let row = ""
        for( var j = 0; j <=i; j++){
            row = row + num;

            num = num + 1
        }
        console.log(row)
    }
}
pattern13(3)

// pattern 14
// A
// AB
// ABC
// ABCD
function pattern14(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += String.fromCharCode('A'.charCodeAt(0) + j);
        }
        console.log(row);
    }
}

let n = 4;
pattern14(n);

function pattern15(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = n; j>=0; j--) {
            row += String.fromCharCode('A'.charCodeAt(0) + 1);
        }
        console.log(row);
    }
}

pattern15(4)