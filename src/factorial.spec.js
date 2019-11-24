const factorialExt = require('./factorial.js').factorialExt;

describe('Extra Large Factorial', () => {

    const simpleFactorial = (n) => n > 1 ? n * simpleFactorial(n-1) : 1;

    it('#simpleFactorial should calculate factorial correctly', () => {
        const testNumber = 5;
        const expectedResult = 120;
        expect(simpleFactorial(testNumber)).toEqual(expectedResult);
    });

    it('Factorials of n>20 can\'t be stored even in a 64-bit long integers', () => {
        const testNumber = 25;
        const expectedResult = '15511210043330985984000000';

        const result = simpleFactorial(testNumber).toString(10);
        expect(result).not.toEqual(expectedResult);
    });

    it('#factorialExt calculates extra large factorial', () => {
        const testNumber = 25;
        const expectedResult = '15511210043330985984000000';

        const result = factorialExt(testNumber).toString();
        expect(result).toEqual(expectedResult);
    });
});