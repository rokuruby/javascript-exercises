const caesar = function(input,num) {
//split ori string into array

//convert all array objects into unicode

//declare a new var to store modified array

//for loop
//if object is exclamations or space , dont convert just store in modified array
//else modify the array object  add the num input and store in modified array
 
//reconvert back the modified array into normal alphabets and exclamations and return the result




};

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