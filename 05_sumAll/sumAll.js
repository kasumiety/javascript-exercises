const sumAll = function(startInt, endInt) {

    let sum = 0;

    // catches non-numbers
    if (typeof startInt != 'number' || typeof endInt != 'number') {
        return "ERROR";
    }

    //catches negative values
    if (startInt < 0 || endInt < 0) {
        return "ERROR";
    }

    //makes arguments swap places if the latter is smaller than the former
    if (endInt < startInt) {
        [startInt, endInt] = [endInt, startInt];
    }

    for (let i = startInt; i <= endInt; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
