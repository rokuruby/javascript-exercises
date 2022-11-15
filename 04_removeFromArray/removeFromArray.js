const removeFromArray = function(arr, ...theArgs) {

      for (let i = 0; i < theArgs.length; i++) {
        if (arr.includes(theArgs[i])) {
          arr.splice(arr.indexOf(theArgs[i]), 1);
        }
      }
      return arr;
    };

// Do not edit below this line
module.exports = removeFromArray;
