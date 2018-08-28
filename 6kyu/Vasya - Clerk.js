// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

// Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

// ###Examples:

// // === JavaScript ==

// tickets([25, 25, 50]) // => YES 
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

function tickets(peopleInLine){
    var twentyFive = peopleInLine.filter( element => element == 25)
    var fifty = peopleInLine.filter(element => element == 50)
    var hundred = peopleInLine.filter(element => element == 100) 
   
        if (twentyFive.length == 0) {
       return 'NO' 
    } else if ( twentyFive.length > 0  && ( fifty.length == 0 && hundred.length == 0 ) ){
      return 'YES'
    } else if ( fifty.length > 0 && hundred.length > 0 ) {
        if ( (hundred.length * 3 === fifty.length  + twentyFive.length)) {
          return 'YES'
        } else if (twentyFive.length > hundred.length*3 && twentyFive.length > fifty.length){
          return 'YES'
        } else {
          return 'NO'
        }
      } else if (fifty.length > 0) {
        if (fifty.length > twentyFive.length) {
          return 'NO'
        } else {
          return 'YES'
        }
      } else if ( hundred.length > 0) {
        if (hundred.length * 3 > twentyFive.length) {
          return 'NO'
        } else {
          return 'YES'
        }
      }
  }