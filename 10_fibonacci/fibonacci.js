const fibonacci = function(num) {
  //using Binet's formula so that its not recursive.This is so I can just plug a fib sequence and formula will spit our the fib number isntead of manually calculating every fib number aka reecursive
  
  //i calculate the golden ratio for more accuracy over using the shorter 1.618
  if (num < 0) {return "OOPS"};
    let fib = ((((1+(Math.sqrt(5)))/2)**(num))-((-((1+(Math.sqrt(5)))/2))**(-num)))/(Math.sqrt(5));

    //Math.floor rounds down, Math.ceil rounds up
    return Math.floor(fib); 
};

// Do not edit below this line
module.exports = fibonacci;

