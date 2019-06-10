const calculateTotalPoints = require('./calculateTotalPoints');
const calculateStylePoints = require('./calculateStylePoints');
const calculateDistancePoints = require('./calculateDistancePoints');
const scores = [-9, 17.5, 16.5, 10, 18.5];


// console.log(calculateTotalPoints(226, 'MAMMOTH', 200, scores, -8.9, 8.7));
// console.log(calculateStylePoints(scores));
console.log(calculateDistancePoints(227.5, 'MAMMOTH', 200))
