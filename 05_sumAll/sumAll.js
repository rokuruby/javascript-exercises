const sumAll = function(num1,num2) {
    
    
   if (num1 < 0 || num2 < 0) {return "ERROR"}
   
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
