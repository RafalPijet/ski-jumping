const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
    const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
    const stylePoints = calculateStylePoints(styleNotes);

    if (distancePoints !== null && stylePoints !== null && isFinite(windFactor) && isFinite(gateFactor)) {
        let result = distancePoints + stylePoints + Number(windFactor) + Number(gateFactor);
        return Math.round(result * 100) / 100;
    } else {
        return 'Data error!!!'
    }

};

module.exports = calculateTotalPoints;
