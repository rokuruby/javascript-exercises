const palindromes = function (str) {
    var oriString = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ").join("");
    var splitString = oriString.split(""); 
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
        console.log(oriString);
        console.log(joinArray);

    if (oriString == joinArray) {
        return true;
    }
        return false;
};

// Do not edit below this line
module.exports = palindromes;
