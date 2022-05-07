const ftoc = function(farenheitTemp) {

    let celsiusTemp = (farenheitTemp - 32) * 5 / 9;
    return Math.round(celsiusTemp * 10) / 10;

};

const ctof = function(celsiusTemp) {
    
    let farenheitTemp = celsiusTemp * 9 / 5 + 32;
return Math.round(farenheitTemp * 10) / 10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
