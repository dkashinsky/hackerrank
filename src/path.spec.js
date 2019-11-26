const findMaxPath = require('./path').findMaxPath;

describe('Max Path', () => {
    it('#findMaxPath is dumb but working example of finding max path', () => {
        // Field of one digit numbers. 
        // Numbers on top, bottom, left and right considered to be neighbors
        const matrix = [
            [0, 9, 3, 1],
            [7, 4, 5, 8],
            [1, 3, 7, 2],
            [6, 5, 1, 4]
        ];

        // number of digits to make a path.
        const pathLength = 4;

        // max number possible to combine from present digits following the rule 
        // that any given digit can be combined only with it's neighbours
        // and each of them can be used only once
        const expectedResult = 9471;
        
        expect(findMaxPath(matrix, pathLength)).toEqual(expectedResult);
    });
});