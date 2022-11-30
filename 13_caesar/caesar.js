const caesar = function(input,num) {
//split ori string into array
    let splitWord = input.split("");
    console.log(splitWord);

//convert all array objects into unicode
// https://www.tamasoft.co.jp/en/general-info/unicode-decimal.html

var unicodeArray = [];
  for (var i = 0; i < splitWord.length; i++) {
    unicodeArray.push(splitWord[i].charCodeAt(0));
  }
  console.log(unicodeArray);

//declare a new var to store modified array
var modArray = [];
//for loop
//if object is exclamations or space , dont convert just store in modified array
//else modify the array object  add the num input and store in modified array
for (var i = 0; i < unicodeArray.length; i++) {
    if (((unicodeArray[i]) >= 65) && ((unicodeArray[i]) <= 90)||((unicodeArray[i]) >= 97) && ((unicodeArray[i]) <= 122))
        modArray[i] = unicodeArray[i] + num;
    };
    modArray[i] = unicodeArray[i];

 console.log(modArray);

//reconvert back the modified array into normal alphabets and exclamations and return the result
    var encryptArray = [];
    for (var i = 0; i < modArray.length; i++) {
    encryptArray[i] = String.fromCharCode(modArray[i]);
    }

console.log(encryptArray);
//join the array back to a string var
 var joinArray = encryptArray.join("");
 return joinArray;
 console.log(joinArray);
}

// Do not edit below this line
module.exports = caesar;

/*
OLD CODE ATTEMPT
//split string into individual letters and exclamations in an array
//need to use unicode as upper case and lower case letter has their own individual code in sequence to solve the upper lower case problem

    let abcde  = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let splitWord = input.split("");
    console.log(splitWord);
//IF any exclamation or space, skip it, ELSE add or minus input numbers for every individual letter
//find  and return the index number of the input letter array
    var indexSplitWord =[];

    for (var i = 0; i < splitWord.length; i++) {
         indexSplitWord[i] = abcde.indexOf(splitWord[i]);
      };
      console.log(indexSplitWord);
//add or minus the index number with the 2nd number input to come up with a new index number
    var modIndexWord = [];
    for (var i = 0; i < indexSplitWord.length; i++) {
        modIndexWord[i] = indexSplitWord[i] + num;
     };
     console.log(modIndexWord);

//return the new letter that matches the new index number
     var encryptWordSplit = [];
     for (var i = 0; i < modIndexWord.length; i++) {
        encryptWordSplit[i] = abcde[modIndexWord[i]];
     };
     console.log(encryptWordSplit);

//join back all the letters and exclamations and return the answer in a non array and string variable
    let joinWord = encryptWordSplit.join("");
    return joinWord;
    console.log(joinWord);
*/