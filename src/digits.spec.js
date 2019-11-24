const digits = require('./digits.js');

describe('Digits', () =>{
    
    it('#getDigitsReversed should get array of digits in reversed order', () => {
        const testNumber = 75329;
        const expected = [7,5,3,2,9].reverse();

        const result = digits.getDigitsReversed(testNumber);
        expect(result).toEqual(expected);
    });

    it('#findDigits should return count of digits considered to be dividers of the provided number', () => {
        const testNumber = 125; // consists of 1, 2 and 5
        const dividersCount = 2; // only 1 and 5 can divide 125 without remainder

        expect(digits.findDigits(testNumber)).toEqual(dividersCount);
    });

});