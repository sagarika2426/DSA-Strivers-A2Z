// Pattern - 7: Star Pyramid

// Input Format: N = 3
// Result: 
//   *  
//  *** 
// *****  


function printStarPyramid(N) {
    // Loop through each row
    for (let i = 0; i < N; i++) {
        let row = '';
        // Add spaces
        for (let j = 0; j < N - i - 1; j++) {
            row += ' '; //add space
        }
        // Add stars
        for (let k = 0; k < 2 * i + 1; k++) { //if i is 1, k will be 3
            row += '*';
        }
          // Add spaces
          for (let l = 0; l < N - i - 1; l++) {
            row += ' '; //add space
        }
        console.log(row);
    }
}

printStarPyramid(3);


// Pattern - 8: Inverted Star Pyramid
// Input Format: N = 3
// Result: 
// *****  
//  ***
//   *   

function printStarPyramid2(N){
    for(let i = N-1; i>=0; i--){
        let row = "";
        for(let j = 0; j< N-i-1; j++){ 
            row += " ";
        }

        for(let k = 0; k<2*i+1; k++){
            row +="*";
        }
        console.log(row);
    }
}
// printStarPyramid2(3);


// Pattern - 9: Diamond Star Pattern
// Input Format: N = 3
// Result: 
//   *  
//  ***
// ***** 
// *****  
//  ***
//   *   

function printDiamondStar(N){
    for(let i = 0; i<N; i++){
        let row = "";
        for(let j =0; j<N-i-1 ; j++){
            row += " ";

        }
        for(let k = 0; k<2*i+1; k++){
            row+= "*";
        }
        console.log(row);

    }

    for(let i = N-2; i>=0; i--){
        let row = "";
        for(let j = 0; j<N-i-1; j++){
            row+= " ";
        }
        for(let k = 0; k<2*i+1; k++){
            row +="*";
        }
        console.log(row);
    }
}
printDiamondStar(4);

