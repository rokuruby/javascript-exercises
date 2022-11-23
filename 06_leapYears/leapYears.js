const leapYears = function(year) {
    var lYear = year;
    if (lYear % 400 == 0 && lYear % 4 == 0) {return true;}
    
    else if (lYear % 4 == 0 && lYear % 100 > 0) {return true;}

    return false;
};

// Do not edit below this line
module.exports = leapYears;

