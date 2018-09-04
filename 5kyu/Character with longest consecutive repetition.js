function longestRepetition(s) {
    var data = []
     var array = s.split('').reduce ( (elem, accum) => {
        return elem[accum] = ( elem[accum] || 0) + 1, elem
     }, {})
       for (var i in array) {data.push([i, array[i]])}
    }

    function longestRepetition(s) {
        var i,
                temp,
                streak,
                length = s.length,
                highestStreak = 0;
        
            for(i = 0; i < length; i++) {
                // check the value of the current entry against the last
                if(temp != '' && temp == s[i]) {
                    // it's a match
                    streak++;
                } else {
                    // it's not a match, start streak from 1
                    streak = 1;
                }
        
                // set current letter for next time
                temp = s[i];
        
                // set the master streak var
                if(streak > highestStreak) {
                    highestStreak = streak;
                }
            }
        
            // set the master streak var
            if(streak > highestStreak) {
                var highestStreakValue = temp;
                highestStreak = streak;
            }
            return [highestStreak, highestStreakValue];
        }