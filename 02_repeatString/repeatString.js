const repeatString = function(word, i) {
    var repeatedWord = "";
    if (i < 0) {
        return "ERROR";
    };
    while (i > 0) {
        repeatedWord += word;
        i--;
};
return repeatedWord;
}

// Do not edit below this line
module.exports = repeatString;
