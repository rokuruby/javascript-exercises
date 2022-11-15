const removeFromArray = function(a,b,c,d,e) {
   let array = a;
   array.splice(b-1,1);
   array.splice(c-1,1);
   array.splice(d-1,1);
   array.splice(e-1,1);
   return array;
      
};

// Do not edit below this line
module.exports = removeFromArray;
