function getDigitsReversed(number){
    const digits = [];
    while (number >= 10) {
        digits.push(number % 10);
        number = Math.floor(number / 10);
    }
    digits.push(number);

    return digits;
}

class LargeNumber {
    constructor(digitsReversed = [0]){
        this.digitsReversed = digitsReversed;
    }

    multiply(multiplier){
        return LargeNumber.multiply(this, multiplier);
    }

    toString(){
        return this.digitsReversed.reverse().join('');
    }

    static fromString(str){
        const digits = [...str].map(d => parseInt(d, 10));
        return new LargeNumber(digits.reverse());
    }

    static fromNumber(number){
        const digitsReversed = getDigitsReversed(number);
        return new LargeNumber(digitsReversed);
    }

    static multiply(largeNumber, multiplier){
        const reversedDigits = largeNumber.digitsReversed;
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
        
        return new LargeNumber(result);
    }
}

function factorialExt(n){
    let largeNumber = LargeNumber.fromNumber(n);
    while (n > 1){
        largeNumber = largeNumber.multiply(n-1);
        n--;
    }

    return largeNumber;
}

module.exports = {
    factorialExt
}

