// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

function cakes(recipe, available) {
    var resultat = []
     if (Object.keys(recipe).length > Object.keys(available).length) { return 0}
    var arrayRecipient = []; var arrayAvailable = [] ;
      for (var i in available) {arrayAvailable.push( [i , available[i]] )}
      for (var i in recipe) { arrayRecipient.push([ i, recipe[i] ] )}
     arrayAvailable.sort( (a,b) => {return b[1] - a[1]})
    arrayRecipient.sort( (a, b) => { return b[1] - a[1] })
    arrayAvailable.map( element => arrayRecipient.map( (elem,i) => {
      if (element[0] === elem[0]) { 
        return resultat.push(element[1] / elem[1])
      } 
    }) 
    )
    var minValue = Math.min(...resultat)
    return Math.floor(minValue)  
  }

  // Solution interessante

  function cakes(recipe, initial){
    return Math.floor(Object.keys(recipe).reduce(function(min, key){
       return Math.min(initial[key] / recipe[key] || 0, min); 
    }, Infinity));
 }
 //initial : donne key-value; key : donne la key ; initial[key] : donne la value
