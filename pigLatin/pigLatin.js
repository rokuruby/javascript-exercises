function pigLatin(string) {
//split each words into different objects in array
var splitWords = string.match(/\b(\w+)\b/g);
    console.log(splitWords);

//split each word letter into different sub object within array, and encode to unicode
    for (var i = 0; i < splitWords.length; i++)
    {
        splitWords [i] = splitWords[i].split('');
    }

    console.log(splitWords);

    //convert all letters to unicode

    console.log(splitWords.length);

    for (var i = 0; i < splitWords.length; i++) {
        for (var i2 = 0; i2 < splitWords[i].length; i2++) {
        splitWords [i][i2] = splitWords[i][i2].charCodeAt(0);
    };
}
    console.log(splitWords);
 
//if else to check for first letter of each word object is vowel, 
for (var i = 0; i < splitWords.length; i++) {
    if (splitWords[i][0] == 97 || splitWords[i][0] == 101 || splitWords[i][0] == 105 || splitWords[i][0] == 111 || splitWords[i][0] == 117) {
    //then add "ay to back of word in unicode"
    // a y = 97 , 121
    splitWords[i].push(97,121);
    console.log(splitWords);
}
//else assume  1st letter is consonant, 
//move letter to back of word and check 2nd letter in each word object is consonant, 


//if yes move letter to the back and check 3rd letter if is consonant, if yes move letter to the back

//else add "ay to back of word in unicode"
}


//convert all unicode back to letter

for (var i = 0; i < splitWords.length; i++) {
    for (var i2 = 0; i2 < splitWords[i].length; i2++) {
    splitWords [i][i2] = String.fromCharCode(splitWords[i][i2]);
};
}
console.log(splitWords); 

// join all the letters to words in array

for (var i = 0; i < splitWords.length; i++) {
    splitWords[i] = splitWords[i].join("");
};

console.log(splitWords);

//join all words to sentences with a space in between into a variable and return the variable
var joinWords = splitWords.join(" ");
console.log(joinWords);
return joinWords;
};
  
// Do not edit below this line
module.exports = pigLatin;