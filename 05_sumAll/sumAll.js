const sumAll = function(num1,num2) {
// first logic tests if the inputs are negative, are strings. if yes, it will say "error"
   if (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2) 
   || typeof num1 == 'string' 
   || typeof num2 == 'string' ) {return "ERROR"}

   //test if num1 is larger than num2 and if so, run num1 first
   else if ( num1 > num2) {
    var list = [];

    for (var i = num2; i <= num1; i++) {
        list.push(i);
    }

    var total = list.reduce(function(a, b) {
        return a + b;

    });

    return total;
   }
   //else if num 2 larger than num 1, run num2 first
   var list = [];

    for (var i = num1; i <= num2; i++) {
        list.push(i);
    }

    var total = list.reduce(function(a, b) {
        return a + b;

    });

    return total;
}

// Do not edit below this line
module.exports = sumAll;
