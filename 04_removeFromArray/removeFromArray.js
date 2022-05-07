const removeFromArray = function(array) {

    // .filter method

    // let newArray = array.filter(function(element) {
    //     return element != elementForRemoval;
    // });

    // return newArray;

    //splice method

    //turns arguments into an array

    args = Array.from(arguments);

    outer: for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < args.length; j++) {

            if (array[i] === args[j]) {
                array.splice(i, 1);
                i -= 1;
                continue outer;
            }

        }

    }

    return array;


};

// Do not edit below this line
module.exports = removeFromArray;
