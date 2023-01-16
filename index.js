module.exports = {
    compress: compress,
    uncompress: uncompress,
    setCustomUnit: setCustomUnit
};

let characters = ['K', 'M', 'B', 'T', 'QA', 'QI', 'SX', 'O', 'N'];
let customUnit = false;

function setCustomUnit(array, logMessage = true) {
    array.forEach(element => {
        if (element.length > 2) throw new Error("Your units cannot exceed 2 characters")
    });

    if (logMessage) { console.log("NC: Your custom unit is successfully defined"); }

    characters = array;
    customUnit = true;
}

// This function compress the number by dividing it by the corresponding multiplier and add the unit
function compress(number, decimal = 1) {
    // Check if the input value is a number
    if (Number.isNaN(Number(number))) throw new Error('The parameter must be a number');
    if (Number(number) < 1000) return Number(number);
    
    // This function is used to compress the number and return the compressed value with unit
    function compressStr(number, value, char) {
        // Check if the number is an integer after dividing by the value
        if (Number.isInteger(Number(number) / value) === true) {
            // If yes, return the compressed number with unit
            return `${(Number(number) / value)}${char}`;
        } else {
            // If not, return the compressed number rounded to 1 decimal with unit
            let str = `${(Number(number) / value).toString().substring(0, (Number(number) / value).toString().length - (Number(number) / value).toString().split(/[.]/)[1].length + decimal)}`;
            if (str.endsWith(".")) { return str.slice(0, -1)+char; } else { return str+char; }
        }
    }
    
    let value = ''
    let multiplier = 1
    characters.forEach(character => {
        multiplier *= 1000
        // Check if the current multiplier is less than the number and the next multiplier is greater than the number
        if (multiplier <= Number(number) && Number(number) < multiplier*1000) {
            // Compress the number and store the value
            value = compressStr(Number(number), multiplier, character);
        }
    });

    if(value != '') {
        return value;
    } else {
        if (customUnit) {
            throw new Error('You have not defined a unit for this value');
        } else {
            throw new Error('The number is too large');
        }
    }
}

//==================================== UNCOMPRESS FUNCTION ===============================================

function uncompress(value) {
    // Check if the input value is a number
    if (Number.isNaN(Number(value))) {

        // Extract the unit from the input value
        const unit = value.substring(value.length - 2).toUpperCase().split('')[0]

        // Create an array of numbers from 0 to 9 as strings
        const number = Array.from({length: 10}, (_, i) => String(i));

        // Check if the unit is a single digit number or two letters
        const numberOfCharUnit = number.includes(unit) ? 1 : 2

        let str = '';
        let multiplier = 1;

        characters.forEach(character => {
            multiplier *= 1000;

            // Check if the unit is present in the characters array
            if (characters.includes(value.substring(value.length - numberOfCharUnit).toUpperCase())) {
                if (value.substring(value.length - numberOfCharUnit).toUpperCase() === character) {

                    // Multiply the value without the unit by the multiplier
                    str = value.substring(0, (value.length - numberOfCharUnit)) * multiplier
                }
            } else {
                throw new Error('Invalide argument')
            }
        });
        
        return str
    } else {
        return Number(value)
    }
}