const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof(num1) != 'number' || typeof(num2) != 'number') {
        return 'ERROR';
    } else if (num1 > num2) {
        let tmp = num2;
        num2 = num1;
        num1 = tmp;
    }
    
    let counter = num1;
    let sum = 0;
    while (counter <= num2) {
        sum += counter;
        counter++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
