// The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).

// alternative text

// Can you translate this drawing into an algorithm?

// You will be given two dimensions

// a positive integer length (parameter named lng)
// a positive integer width (parameter named wdth)
// You will return an array or a string (depending on the language; Shell bash and Fortran return a string) with the size of each of the squares.

//   sqInRect(5, 3) should return [3, 2, 1, 1]
//   sqInRect(3, 5) should return [3, 2, 1, 1]
// Notes:
// lng == wdth as a starting case would be an entirely different problem and the drawing is planned to be interpreted with lng != wdth. (See kata, Square into Squares. Protect trees! http://www.codewars.com/kata/54eb33e5bc1a25440d000891 for this problem). When the initial parameters are so that lng == wdth, the solution [lng] would be the most obvious but not in the spirit of this kata so, in that case, return None/nil/null/Nothing. Return {} with C++. In that case the returned structure of C will have its sz component equal to 0. Return the string "nil" with Bash and Fortran.

// You can see more examples in "RUN SAMPLE TESTS".

function sqInRect(lng, wdth){
    if( lng === wdth){return null}
    var shortest = lng > wdth ? wdth : lng ; var firstCompletion = lng > wdth ? wdth : lng; var array = []
    var dataArray = lng > wdth ? Math.floor( lng / wdth) : Math.floor( wdth / lng)// give number of time you use the number 
    var completionNumber = lng > wdth ? lng % wdth : wdth % lng // give the next number
      var previousNumber = shortest; var nextNumber = completionNumber;
    var looping = Math.floor(shortest / completionNumber)
      array =  Array(dataArray).fill(firstCompletion)
      while (completionNumber % shortest != 0){
      if( completionNumber % shortest != 0){
          for (var i = 0; i < looping ; i ++) {
              array.push(completionNumber)
              }
              nextNumber = previousNumber % completionNumber
              completionNumber = nextNumber
              previousNumber = nextNumber + array[array.length - 1] - nextNumber;
              looping = Math.floor(previousNumber / completionNumber) 
          }
      }
  return array
  }

  //Meilleure solution
  function sqInRect(lng, wdth){
    let arr = []
    if(lng === wdth) return null
    while(lng > 0 && wdth > 0){
      arr.push(lng > wdth ? wdth : lng)
      lng > wdth ? lng -= wdth : wdth -= lng
    }
    return arr
  }