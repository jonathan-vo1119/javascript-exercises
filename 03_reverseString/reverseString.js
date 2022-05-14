const reverseString = function(string) {
    const splitArray = string.split("");
    let returnArray = '';
    for (let i = string.length - 1; i >= 0; i--) {
        returnArray += splitArray[i];
    }
    return returnArray;
};

// Do not edit below this line
module.exports = reverseString;
