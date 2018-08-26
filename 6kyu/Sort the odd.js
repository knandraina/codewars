// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
    var tableau = array.filter(element => element % 2 !== 0 ).sort((a,b) => a-b);
    
    return array.map(function(element){ return (element % 2  === 0) ? element : tableau.shift()})
  }