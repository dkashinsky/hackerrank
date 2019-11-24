const getDigits = require('./digits.js').getDigits;

describe('Digits', () =>{
    
    it('#getDigits should get array of digits', () => {
        const actual = getDigits('1102');
        const expected = [1,1,0,2];
        expect(actual).toEqual(expected);
    });

});