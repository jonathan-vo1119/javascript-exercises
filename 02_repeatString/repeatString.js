const repeatString = function(word, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let return_string = '';
    for (let i = 0; i < num; i++) {
        return_string += word;
    }
    return return_string;
};

// Do not edit below this line
module.exports = repeatString;
