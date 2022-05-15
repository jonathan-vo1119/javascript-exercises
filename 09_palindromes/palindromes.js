const palindromes = function (text) {
    const modText = text.replace(/[!,.\s]/g, "");
    modText2 = modText.toLowerCase();
    const myArray = modText2.split("");
    let i = 0;
    let len = myArray.length - 1;
    while (len > 2 * i) {                                       // len - i > i
        if (myArray[i] != myArray[len - i]) {
            return false;
        }
        i++;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
