const dataValidation = tableData => {

    if (tableData !== undefined) {
        if (tableData.length === 5) {
            let isNumber;
            tableData.map(number => {
                isFinite(number) ? isNumber = true : isNumber = false;
            });

            if (isNumber) {
                let minNote = Math.min(tableData[0], tableData[1], tableData[2], tableData[3], tableData[4]);
                let maxNote = Math.max(tableData[0], tableData[1], tableData[2], tableData[3], tableData[4]);

                if (minNote >= 0 && minNote <= 20 && maxNote >= 0 && maxNote <= 20) {
                    let isCorrectlyValue = true;
                    tableData.map(num => {

                        if (num.toString().length === 4 && num.toString().substring(3, 4) !== '5')  {
                            isCorrectlyValue = false;
                        }
                    });
                    return isCorrectlyValue;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
};

const calculateStylePoints = styleNotes => {
    let isCorrect = dataValidation(styleNotes);

    if (isCorrect) {
        const resultNotes = [];
        styleNotes.sort();
        styleNotes.pop();
        styleNotes.shift();
        styleNotes.map(number => {
            resultNotes.push(Number(number));
        });
        return resultNotes.reduce((total, number) => {
            return total + number;
        });
    } else {
        return null;
    }
};

module.exports = calculateStylePoints;
