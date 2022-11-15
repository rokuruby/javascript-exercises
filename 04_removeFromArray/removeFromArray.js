const removeFromArray = function(a,b,c,d,e) {
   let array = a; 
   array.splice(b-1,1); /*1st position to start splicing/ 2nd how many chars to splice*/ 
return array;   
};

// Do not edit below this line
module.exports = removeFromArray;
