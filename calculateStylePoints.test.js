const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    describe('points', () => {
        it('should return points', () => {
            //GIVE
            const pointsArray = [18.5, 17.5, 16.5, 18, 18.5];
            //WHEN
            const result = calculateStylePoints(pointsArray);
            const expected = 54;
            //THEN
            assert.equal(result, expected);
        });

        it('should return points', () => {
            //GIVE
            const pointsArray = ['18.5', 17.5, 16.5, 10, 18.5];
            //WHEN
            const result = calculateStylePoints(pointsArray);
            const expected = 52.5;
            //THEN
            assert.equal(result, expected);
        });

        it('should return points', () => {
            //GIVE
            const pointsArray = [10.5, 10.5, 10.5, 10.5, 10.5];
            //WHEN
            const result = calculateStylePoints(pointsArray);
            const expected = 31.5;
            //THEN
            assert.equal(result, expected);
        });
    });
    describe('errors', () => {
        it('should return null because value in array is below min-value', () => {
            //GIVE
            const pointsArray = [-9, 17.5, 16.5, 10, 18.5];
            //WHEN
            calculateStylePoints(pointsArray);
            //THEN
            assert.ifError(null);
        });

        it('should return null because value in array is above max-value', () => {
            //GIVE
            const pointsArray = [18.5, 17.5, 16.5, '20.5', 18.5];
            //WHEN
            calculateStylePoints(pointsArray);
            //THEN
            assert.ifError(null);
        });

        it('should return null because the array have only four values', () => {
            //GIVE
            const pointsArray = [18.5, 17.5, 16.5, 18.5];
            //WHEN
            calculateStylePoints(pointsArray);
            //THEN
            assert.ifError(null);
        });

        it('should return null because only half of the total value is allowed', () => {
            //GIVE
            const pointsArray = [18.5, 17.5, 16.2, 18.5, 18.5];
            //WHEN
            calculateStylePoints(pointsArray);
            //THEN
            assert.ifError(null);
        });

        it('should return null because each value must be a number', () => {
            //GIVE
            const pointsArray = [18.5, 'text', 16.5, 18.5, 18.5];
            //WHEN
            calculateStylePoints(pointsArray);
            //THEN
            assert.ifError(null);
        });

        it('should return null because the function dont have parameters', () => {
            //GIVE, WHEN
            calculateStylePoints();
            //THEN
            assert.ifError(null);
        });
    });
});
