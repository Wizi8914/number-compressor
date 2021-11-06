module.exports = {
    compress: compress,
    uncompress: uncompress
};


function compress(number) {
    if (Number.isNaN(Number(number))) {
        return new Error('The parameter must be a number');
    }
    if (Number(number) < 1000) {
        return Number(number);
    }
    function compressstr(number, value, char) {
        if (Number.isInteger(Number(number) / value) === true) {
            return `${(Number(number) / value)}${char}`;
        } else {
            return `${(Number(number) / value).toString().substring(0, (Number(number) / value).toString().length - (Number(number) / value).toString().split(/[.]/)[1].length + 1)}${char}`;
        }
    }
    if (Number(number) >= 1000 && Number(number) < 1000000) {
        return compressstr(Number(number), 1000, 'K')
    } else if (Number(number) >= 1000000 && Number(number) < 1000000000) {
        return compressstr(Number(number), 1000000, 'M')
    } else if (Number(number) >= 1000000000 && Number(number) < 1000000000000) {
        return compressstr(number, 1000000000, 'B')
    } else if (Number(number) >= 1000000000000 && Number(number) < 1000000000000000) {
        return compressstr(Number(number), 1000000000000, 'T')
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