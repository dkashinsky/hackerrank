function getDigitsReversed(number){
    const digits = [];
    while (number >= 10) {
        digits.push(number % 10);
        number = Math.floor(number / 10);
    }
    digits.push(number);
    return digits;
}

function multiply(reversedDigits, multiplier){
    const result = [];
    let next = 0;

    for (let i=0, ic = reversedDigits.length; i<ic; i++){
        const multiplicationResult = reversedDigits[i] * multiplier + next;
        const newDigit = multiplicationResult % 10;
        next = Math.floor(multiplicationResult / 10);
        result.push(newDigit);
    }

    if (next) 
        result.push(...getDigitsReversed(next));
    
    return result;
}

function factorialExt(n){
    let digits = getDigitsReversed(n);
    while (n > 1){
        digits = multiply(digits, n-1);
        n--;
    }

    return digits.reverse();
}

module.exports = {
    factorialExt
}

