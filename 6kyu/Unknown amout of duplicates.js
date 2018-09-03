// This challenge is an extension of the kata of Codewars: Missing and Duplicate Number", authored by the user Uraza. (You may search for it and complete it if you have not done it)

// In this kata, we have an unsorted sequence of consecutive numbers from a to b, such that a < b always (remember a, is the minimum, and b the maximum value).

// They were introduced an unknown amount of duplicates in this sequence and we know that there is an only missing value such that all the duplicate values and the missing value are between a and b, but never coincide with them.

// Find the missing number with the duplicate numbers (duplicates should be output in a sorted array).

// Let's see an example:

// arr = [10,9,8,9,6,1,2,4,3,2,5,5,3]

// find_dups_miss([10,9,8,9,6,1,2,4,3,2,5,5,3]) == [7,[2,3,5,9]]

// The code should be fast to process long arrays (maximum length aprox. = 1.000.000). The values for the randon tests:

// 500 <= a <= 50000
// a + k <= b and 100 <= k <= 1000000
// amount of duplicates variable, according to the length of the array


//Not efficient
function findDupsMiss(arr) {
    let filterDuplicates = arr.sort( (a,b) => { return a - b }).filter( (elem, i, arr) => { return elem === arr[i+1]})
    let missingValues = arr.sort( (a,b) => {return a - b}).filter ( (elem, i, arr) => { return elem != arr[i+1]})
  
  let i = missingValues[missingValues.length-1]

  
  while(i--){
    if (missingValues.indexOf(i) == -1) {
        var valeurManquante = i
        break
        }
  }
  return [valeurManquante, filterDuplicates]     
  }

// Efficient Way
function findDupsMiss(arr) {
  const data = new Set()
  var missingData = arr.sort( (a,b) => {
    return a-b
  }).filter( (elem, i , arr) => {
    if (elem == arr[i+1]) { data.add(elem)}
    return arr[i + 1] != elem + 1 && arr[i + 1] != elem && arr[i+1] !== undefined
  })[0] + 1
  return [missingData, [...data]]
}