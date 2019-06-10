const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');
const testData = require('./testData');

describe('calculateTotalPoints', () => {
    describe('points', () => {
        for (let i = 0; i < testData.length; i++) {
            it(`should return points for ${testData[i].hillSize}`, () => {
                //GIVE, WHEN
                let result = calculateTotalPoints(testData[i].distance, testData[i].hillSize,
                    testData[i].kPoint, testData[i].scores, testData[i].windFactor, testData[i].gateFactor);
                //THEN
                assert.equal(result, testData[i].result)
            })
        };

        it('should return points', () => {
            //GIVE, WHEN
            const result = calculateTotalPoints(131, 'BIG', 120,
                [18.5, 19.5, 18.5, 19.0, 18.5], '-3.7', '0');
            const expected = 132.1;
            //THEN
            assert.equal(result, expected);
        });

        it('should return points', () => {
            //GIVE, WHEN
            const result = calculateTotalPoints('131', 'BIG', '120',
                ['18.5', '19.5', '18.5', '19', '18.5'], '-3.7', '0');
            const expected = 132.1;
            //THEN
            assert.equal(result, expected);
        })
    });

    describe('errors', () => {
        it('should return "Data error!!!" because the function dont have all parameters', () => {
            //GIVE, WHEN
            const result = calculateTotalPoints();
            //THEN
            assert.equal('Data error!!!', result);
        });

        it('should return "Data error!!!" because the function have only three parameters', () => {
            //GIVE, WHEN
            const result = calculateTotalPoints(221, 'BIG', 200);
            //THEN
            assert.equal('Data error!!!', result);
        });

        it('should return "Data error!!!" because the distance value must be a number', () => {
            //GIVE, WHEN
            const result = calculateTotalPoints("text", 'BIG', 200);
            //THEN
            assert.equal('Data error!!!', result);
        });
    })
});
