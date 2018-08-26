// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration (seconds) {
    var second = 0; var minutes = 0; var hours = 0; var days = 0 ; var years = 0;
      if (seconds === 0){return 'now'}
      
      while (seconds > 0 ) {
        if ( seconds > 31536000) {seconds -= 31536000;years += 1;
          } else if ( seconds >= 86400 && seconds < 31536000) {
            seconds -= 86400;
            days += 1
          } else if ( seconds >= 3600 && seconds < 86400 ) {
            seconds -= 3600
            hours += 1
          } else if (seconds >= 60 && seconds < 3600 ) {
            seconds -= 60
            minutes += 1
          } else if (seconds > 0 && seconds < 60 ) {
            second = seconds
            seconds -= seconds
          }
        }
        return pluriel(years, days, hours, minutes, second)
        
    }
    function pluriel(year, day, hour, minute, second) {
    
    var array = [ year, day, hour,  minute,second].filter (element => element != 0);
    var objet = {year : year, day: day, hour : hour, minute : minute, second: second}
    var sentenceYear = ""; var sentenceDay=""; var sentenceHour =""; var sentenceMinutes="";var sentenceSeconds=""
      Object.keys(objet).forEach(function(key) {if (objet[key] == 0) delete objet[key];});
    
      if ( year > 1 ) { var sentenceYear = `${year} years`; objet.year = sentenceYear} else if ( year == 1 ) { var sentenceYear = `${year} year`;objet.year = sentenceYear}
      if ( day > 1 ) {var sentenceDay = `${day} days`; objet.day = sentenceDay} else if ( day == 1 ) {var sentenceDay = `${day} day`;objet.day = sentenceDay}
      if ( hour > 1 ) { var sentenceHour = `${hour} hours`;objet.hour = sentenceHour} else if ( hour == 1 ) {var sentenceHour = `${hour} hour`; objet.hour = sentenceHour}
      if ( minute > 1 ) {var sentenceMinutes = `${minute} minutes`;objet.minute = sentenceMinutes} else if ( minute == 1 ) {var sentenceMinutes = `${minute} minute`;objet.minute = sentenceMinutes}
      if ( second > 1 ) {var sentenceSeconds = `${second} seconds`; objet.second = sentenceSeconds} else if ( second == 1 ) {var sentenceSeconds = `${second} second`; objet.second = sentenceSeconds}
     
      if (array.length === 5 ) { var sentence = `${sentenceYear}, ${sentenceDay}, ${sentenceHour}, ${sentenceMinutes} and ${sentenceSeconds}` }
      if (array.length === 4) {var sentence =`${Object.values(objet)[0]}, ${Object.values(objet)[1]}, ${Object.values(objet)[2]} and ${Object.values(objet)[3]}`}  
      if (array.length === 3) {  var sentence =`${Object.values(objet)[0]}, ${Object.values(objet)[1]} and ${Object.values(objet)[2]}` }
      if (array.length === 2) { var sentence =`${Object.values(objet)[0]} and ${Object.values(objet)[1]}` }
      if ( array.length === 1 ) {var sentence =`${Object.values(objet)[0]}`}
    return sentence
      }
