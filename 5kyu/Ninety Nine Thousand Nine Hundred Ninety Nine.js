// Write a method that takes a number and returns a string of that number in English. For example

// numberToEnglish(27) // => 'twenty seven'
// Your method should be able to handle any number between 0 and 99999. If given numbers outside of that range or non-Integer numbers, the method should return an empty string.

let number = {
    0 : 'zero',
    1 : 'one',
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine',
    10 : 'ten',
    11 : 'eleven',
    12 : 'twelve',
    13 : 'thirteen',
    14 : 'fourteen',
    15 : 'fifteen',
    16 : 'sixteen',
    17 : 'seventeen',
    18 : 'eighteen',
    19 : 'nineteen'
    };

  
 let dizaine = {
  2 : 'twenty',
  3 : 'thirty',
  4 : 'forty',
  5 : 'fifty',
  6 : 'sixty',
  7 : 'seventy',
  8 : 'eighty',
  9 : 'ninety'
  }; 
  var centaine = {
    100 : 'hundred'
  }
  var milliers = {
    1000 : 'thousand'
  }

const numberToEnglish = n => {
var sentence ='';
  var data = n
  var sentence = "";
  if (String(n).length === 1) {
   return unite(data)
  }  else if (String(n).length === 2 && n < 20){
    sentence = unite(data)
    return sentence     
  } else if (String(n).length === 2 && n >= 20) {
    sentence = dozen(data) + ' ' +uniteUnderTen(data)
    return n == 20 || n == 30 || n == 40 || n == 50 || n == 60 || n == 70 || n == 80 || n == 90 ? sentence.replace(/\w+[.!?]?$/, '').replace(/\s+$/, '') : sentence
  } else if (String(n).length === 3 && String(n).slice(1) < 20 ) {
  
    var sentence = unite(String(data)[0]) + ' hundred ' + unite(String(data).slice(1))
    var sentenceTwo = n !== 100 ? unite(String(data)[0]) + ' hundred ' + uniteUnderTen(String(data).slice(1)) : (unite(String(data)[0]) + ' hundred ' + uniteUnderTen(String(data).slice(1))).replace(/\w+[.!?]?$/, '').replace(/\s+$/, '')
        
    return sentence.includes('undefined') ? sentenceTwo : sentence
  } else if (String(n).length === 3 && String(n).slice(1) >= 20) {
    return unite(String(data)[0]) + ' hundred ' + dozen(String(data).slice(1)) + ' ' + unite(String(data)[String(data).length-1])
  }
}

function unite(n){
  for (var i = 0 ; i < Object.keys(number).length ; i ++) {
	  for ( var j = 0 ; j < String(n).length ; j ++) {
		  if (Object.keys(number)[i] === String(n)) {
         return Object.values(number)[i]
          }
        }
	}
}

function uniteUnderTen(n){
  for (var i = 0 ; i < Object.keys(number).length ; i ++) {
	  for ( var j = 0 ; j < String(n).length ; j ++) {
		  if (Object.keys(number)[i] === String(n)[String(n).length-1]) {
         return Object.values(number)[i]
          }
        }
	}
}

function dozen (n) {
  for (var i = 0 ; i < Object.keys(number).length ; i++) {
     if (Object.keys(dizaine)[i] === String(n)[0]) {
              return Object.values(dizaine)[i]
    }
  }
}