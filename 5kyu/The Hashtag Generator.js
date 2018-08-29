// The marketing team is spending way too much time typing in hashtags.
// Let's help them with out own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str) {
    var sentence = str; if ((sentence.split(" ").length - 1) > 150 ) {return false}
      var hastag = "#"; sentence = sentence.replace(/\w+/g, (txt) => {
        // uppercase first letter and add rest unchanged
        return txt.charAt(0).toUpperCase() + txt.substr(1);
      }).replace(/\s+/g, '');// remove any spaces
     return str === "" || sentence.length >= 140 ? false : hastag+sentence ;
    }

    //Other solution

    function generateHashtag (str) {
        if(!str || str.length < 1) return false;
        
        var r = '#' + str.split(' ').map(function(el) {
          return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
        }).join('');
        return r.length > 140?false:r;
     }

     function generateHashtag (str) {
        const capitalized = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
        
        if (capitalized && capitalized.length <= 139) {
          return "#" + capitalized;
        } else {
          return false;
        }
      }