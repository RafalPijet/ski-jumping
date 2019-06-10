const calculateDistancePoints = (distance, hillSize, kPoint) => {
    const NORMAL = 'NORMAL';
    const BIG = 'BIG';
    const MAMMOTH = 'MAMMOTH';
    let score = 0;
    let difference = 0;

    if (isFinite(distance) && isFinite(kPoint) && (hillSize === NORMAL || hillSize === BIG || hillSize === MAMMOTH)) {
        difference = Number(distance) - Number(kPoint);
        hillSize === NORMAL || hillSize === BIG ? score = 60 : score = 120;

        if (hillSize === NORMAL) {
            return  score + difference * 2;
        } else if (hillSize === BIG) {
            return  score + difference * 1.8;
        } else {
            return  score + difference * 1.2;
        }
    } return null;
};

module.exports = calculateDistancePoints;
