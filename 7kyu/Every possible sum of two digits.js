// Given a long number, return all the possible sum of two digits of it.

// For example, 12345: all possible sum of two digits from that number are:

// [ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]

function digits(num){
    var final = []
    var tableau = String(num).split('')
    var data = tableau.map(element => parseInt(element));
    for ( var i = 0; i < data.length ; i++ ) {
      for ( var j = 1 ; j < data.length ; j++ ) {
          final.push(data[i] + data[j]);
        } 
        data.splice(0,1);
        i = -1;
      }
      return final
    }