// Write a method that takes a number and returns a string of that number in English. For example

// numberToEnglish(27) // => 'twenty seven'
// Your method should be able to handle any number between 0 and 99999. If given numbers outside of that range or non-Integer numbers, the method should return an empty string.

const numberToEnglish = n => {


  let underTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six','seven', 'eight', 'nine', 'ten'
            ,'eleven', 'twelve', 'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
  let aboveTwenty = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty','seventy','eighty','ninety']
  
  if( n < 0 || n > 99999 || Math.floor(n) < n) {return ""}
  
    if ( n  < 20) { return underTwenty[n] }
  
    if (n < 100 ) {return aboveTwenty[parseInt(n / 10)] + (n % 10 === 0 ? '' : ' '+ numberToEnglish(n%10)) }
  
    if (n < 1000 ) {return numberToEnglish( parseInt( n / 100 )) + ' hundred' + ( n % 100 === 0 ? '' : ' ' +numberToEnglish(n%100)) }
  
    if (n < 10000 ) { return numberToEnglish(parseInt(n / 1000)) + ' thousand' + ( n % 1000 === 0 ? '' : ' ' + numberToEnglish(n % 1000 ) )  }
  
  
   if(n < 100000){return numberToEnglish(parseInt(n / 1000)) + " thousand" +  (n % 1000 == 0 ? '' : ' ' + numberToEnglish(n % 1000))}
  
  }