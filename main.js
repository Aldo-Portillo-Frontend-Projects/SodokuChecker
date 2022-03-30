//puzzle
let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];


//puzzle 2
let puzzleTwo = [[ 8,9,5,7,4,2,1,3,6 ],
                [ 8,7,1,9,6,3,4,8,5 ],
                [ 4,6,3,5,8,1,7,9,2 ],
                [ 9,3,4,6,1,7,2,5,8 ],
                [ 5,1,7,2,3,8,9,6,4 ],
                [ 6,8,2,4,5,9,3,7,1 ],
                [ 1,5,9,8,7,4,6,2,3 ],
                [ 7,4,6,3,2,5,8,1,9 ],
                [ 3,2,8,1,9,6,5,4,7 ]];

function getRow(puzzle, row) {
  // The function should return an array containing the numbers in the specified row.
  
  return puzzle[row];

}

//console.log(getRow(puzzle, 1));

function getColumn(puzzle, col) {
  // The function should return an array containing the numbers in the specified column.

  let column = [];
  for (let i = 0; i < puzzle.length; i++){
      column.push(puzzle[i][col]);
  }

  return column;
}

//console.log(getColumn(puzzle, 1));


//Part of get section but adding these functions in global scope
let getSquareIndexes = (num) => {
  if (num === 0) {
    return [0,1,2];
  } else if (num === 1) {
    return [3,4,5];
  } else if (num === 2){
    return [6,7,8];
  }
}

function getSection(puzzle, x, y) {
  // This function should accept three arguments: puzzle, and an x and y coordinate for one of the puzzle's 3x3 sub-grids. The function should return an array with all the numbers in the specified sub-grid.
  let values = [],
      rows = getSquareIndexes(y),
      columns = getSquareIndexes(x);

  rows.forEach(row => {
    columns.forEach(column => {
      values.push(puzzle[row][column]);
    });
  });

  return values;
    
}

//console.log(getSection(puzzle, 0, 0));
//console.log(getSection(puzzle, 1, 0));

function includes1To9(arr) {
  //Write a function includes1to9 that takes in arr that accomplishes this. This function should return a boolean.
    let sum = arr.reduce((a, b) => a + b, 0);

    if (sum === 45){
        return true;
    } else {
        return false;
    }

}
//Helper functions for Sodoku is Valid

//validate rows (maybe columns too)

let rowsAndColsValid = (puzzle) => {
    for (let i = 0; i < 8; i++){
       if (includes1To9(getRow(puzzle, i)) && includes1To9(getColumn(puzzle, i)) === true){
           return true;
        } else {
            return false;
        }
    }
}

console.log("for rows and columns " + rowsAndColsValid(puzzle));

let sectionValid = (puzzle) => {
    for (let i = 0; i < 2; i++){
        for (let j = 0; j < 2; j++){
            if (includes1To9(getSection(puzzle, i, j)) === true){
                return true;
            } else {
                return false;
            }
        }
    }
}

console.log("for section " + sectionValid(puzzle));
function sudokuIsValid(puzzle) {
  // This function is to determine whether or not our sudoku puzzle has the values of 1-9 through each row and within each sub-grid with no repeats. The function will accept a sudoku puzzle and should return a boolean.

    if (rowsAndColsValid(puzzle) === true && sectionValid(puzzle) === true){
        return true;
    } else {
        return false;
    }

}

console.log("for all " + sudokuIsValid(puzzle))


/*
console.log(includes1To9(getRow(puzzle, 1)));
console.log(includes1To9(getColumn(puzzle, 0)))

console.log(includes1To9([1,1,2,3,4,5,6,7,8]))

console.log(includes1To9(getSection(puzzle, 0, 1)))

//console.log(sudokuIsValid(puzzle));

*/
