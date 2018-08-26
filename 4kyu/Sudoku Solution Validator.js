// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9. 
// (More info at: http://en.wikipedia.org/wiki/Sudoku)

// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

// Examples
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]); // => true
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]); // => false

function validSolution(board) {
    var checking = [45, 45, 45, 45, 45, 45, 45, 45, 45]; var validationCalcul = true; var validationCalculTranspose = true; var validationConcatenation = true
    var calcul = board.map((elem, i, arr) => { return elem.reduce((accum, current) => { return accum + current }, 0) })

    var transpose = board[0].map((col, i) => board.map(row => row[i]));
    var calculTranspose = transpose.map((elem, i, arr) => { return elem.reduce((accum, current) => { return accum + current }, 0) })

    var one = board[0].splice(0, 3); var two = board[1].splice(0, 3); var three = board[2].splice(0, 3);
    var concatenation = one.concat.apply(one, [two, three])
    concatenation = concatenation.reduce((accum, current) => { return accum + current }, 0)
    if (concatenation != 45) { validationConcatenation = false }

    for (var i = checking.length; i--;) { if (checking[i] !== calcul[i]) validationCalcul = false; }
    for (var i = checking.length; i--;) { if (checking[i] !== calculTranspose[i]) validationCalculTranspose = false; }

    return validationCalcul === true && validationCalculTranspose === true && validationConcatenation === true ? true : false
}

  //   Solution intelligente
  function validSolution(board){
  
    return board.some(function(a){
        return a.reduce(function(a,b){return a+b},0) !== 45;
    }) === true ? false : board.some(function(b,i,arr){
       
         return (arr[0][i] + arr[1][i] + arr[2][i] + arr[3][i] + arr[4][i] + arr[5][i] +arr[6][i] + arr[7][i] + arr[8][i]) !== 45 ;
       
    }) === true ? false : (board[0][0]+board[0][1]+board[0][2] + board[1][0]+board[1][1]+board[1][2] + board[2][0]+board[2][1]+board[2][2]) === 45 ? true :false ;
  }