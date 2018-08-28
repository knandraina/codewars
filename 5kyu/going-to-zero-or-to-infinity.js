function going(n) {
    let d = 1; let res = 1;
    for (let i = n; i > 1; i --) {
      d *= i;
      res += 1 / d;
    }
    return Math.floor(res * 1000000) /  1000000;
  }

//optimisé
function going(n) {
    var array = [];
    var array2 = [];
    for (var i = 1; i <= n; i++) { array.push(i); }
    for (var k = array.length; k >= 1; k--) {
        var item = k;
        for (var j = k - 1; j >= 1; j--) {
            item *= j
        }
        array2.push(item);
    }
    return array2
}

function going(n) {
    const factorial =(n) =>!(n > 1) ? 1 : factorial(n - 1) * n;
    let sum=0;
 
    for (let i=1;i<n+1;i++){
        sum+=factorial(i);
    }
    let result = (1/factorial(n))*sum;
    let truncated = Math.floor(result * 1000000) / 1000000;
 
    return truncated
 }