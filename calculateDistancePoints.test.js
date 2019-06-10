const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('poinst', () => {
        it('should return points', () => {
            //GIVE, WHEN
            const result = calculateDistancePoints(227.5, 'NORMAL', 200);
            const expected = 115;
            //THEN
            assert.equal(result, expected);
        });

        it('should return points', () => {
            //GIVE, WHEN
            const result = calculateDistancePoints(227.5, 'BIG', 200);
            const expected = 109.5;
            //THEN
            assert.equal(result, expected);
        });

        it('should return points', () => {
            //GIVE, WHEN
            const result = calculateDistancePoints(227.5, 'MAMMOTH', 200);
            const expected = 153;
            //THEN
            assert.equal(result, expected);
        });

        it('should return points', () => {
            //GIVE, WHEN
            const result = calculateDistancePoints('227.5', 'MAMMOTH', '200');
            const expected = 153;
            //THEN
            assert.equal(result, expected);
        });
    });
    
    describe('errors', () => {
        it('should return null because the function dont have parameters', () => {
            //GIVE, WHEN
            calculateDistancePoints();
            //THEN
            assert.ifError(null);
        });

        it('should return null because the function have only one parameter', () => {
            //GIVE, WHEN
            calculateDistancePoints(215);
            //THEN
            assert.ifError(null);
        });

        it('should return null because the distance value must be a number', () => {
            //GIVE, WHEN
            calculateDistancePoints("text", 'BIG', 200);
            //THEN
            assert.ifError(null);
        });

        it('should return null because the kPoint value must be a number', () => {
            //GIVE, WHEN
            calculateDistancePoints(190.5, 'NORMAL', "text");
            //THEN
            assert.ifError(null);
        });

        it('should return null because the hillSize value must be only three const values', () => {
            //GIVE, WHEN
            calculateDistancePoints(190.5, 'another-const', 200);
            //THEN
            assert.ifError(null);
        });
    });
});
