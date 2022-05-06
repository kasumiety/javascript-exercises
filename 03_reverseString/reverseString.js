const reverseString = function(string) {
    newString = "";

    // Alternative method
    // for (let i = 0; i < string.length; i++) {
    //     newString += string.slice(string.length - i  - 1, string.length - i);
    // }

    for (let i = 0; i < string.length; i++) {
        newString += string.charAt(string.length - i - 1);
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
