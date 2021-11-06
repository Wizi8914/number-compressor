module.exports = {
    compress: compress,
    uncompress: uncompress
};


function compress(number) {
    if (typeof(number) !== 'number') {
        return new Error('The parameter must be a number');
    }
    if (number < 1000) {
        return number;
    }
    function compressstr(number, value, char) {
        if (Number.isInteger(number / value) === true) {
            return `${(number / value)}${char}`;
        } else {
            return `${(number / value).toString().substring(0, (number / value).toString().length - (number / value).toString().split(/[.]/)[1].length + 1)}${char}`;
        }
    }
    if (number >= 1000 && number < 1000000) {
        return compressstr(number, 1000, 'K')
    } else if (number >= 1000000 && number < 1000000000) {
        return compressstr(number, 1000000, 'M')
    } else if (number >= 1000000000 && number < 1000000000000) {
        return compressstr(number, 1000000000, 'B')
    } else if (number >= 1000000000000 && number < 1000000000000000) {
        return compressstr(number, 1000000000000, 'T')
    }
}


//==================================== FUNCTION UNCOMPRESS ===============================================

function uncompress(value) {
    if (Number.isNaN(Number(value))) {
        function endwith(letter, value) {
            return String(value).toUpperCase().endsWith(letter, value.length)
        }
        if (endwith('K', value) || endwith('M', value) || endwith('B', value) || endwith('T', value)) {
            if (Number.isNaN(Number(value.substring(0, (value.length - 1))))) {
                return new Error('Invalide argument')
            } else {
                if(value.substring(value.length - 1).toUpperCase() === 'K') {
                    return (value.substring(0, (value.length - 1)) * 1000)
                } else if (value.substring(value.length - 1).toUpperCase() === 'M') {
                    return (value.substring(0, (value.length - 1)) * 1000000)
                } else if (value.substring(value.length - 1).toUpperCase() === 'B') {
                    return (value.substring(0, (value.length - 1)) * 1000000000)
                } else if (value.substring(value.length - 1).toUpperCase() === 'T') {
                    return (value.substring(0, (value.length - 1)) * 1000000000000)
                }
            }
        } else {
            return (new Error('Invalide argument'))
        }
    } else {
        return Number(value)
    }
}