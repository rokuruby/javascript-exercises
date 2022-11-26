const ftoc = function(f) {
    var convertC = (f - 32) * (5/9);
  var decimalC = parseFloat(convertC.toFixed(1));
  return decimalC;
};

const ctof = function(c) {
  var convertF = (c * (9/5)) + 32;
  var decimalF = parseFloat(convertF.toFixed(1));
  return decimalF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
