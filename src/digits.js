function getDigitsReversed(number){
    const digits = [];
    while (number >= 10) {
        digits.push(number % 10);
        number = Math.floor(number / 10);
    }
    digits.push(number);
    return digits;
}

function findDigits(n) {
    const number = parseInt(n, 10);
    const digits = getDigitsReversed(number);

    let counter = 0;
    digits.forEach(digit => {
        if (number % digit === 0) counter++;
    });
    return counter;
}

module.exports = {
    getDigitsReversed,
    findDigits
}