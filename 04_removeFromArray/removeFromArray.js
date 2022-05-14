const removeFromArray = function() {
    const delNums = Array.from(arguments);
    const myArray = delNums.shift();
    let returnArray = [];

    for (let i = 0; i < myArray.length; i++) {
        if (!delNums.includes(myArray[i])) {
            returnArray.push(myArray[i]);
        }
    }
    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
