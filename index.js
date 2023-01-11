module.exports = {
    compress: compress,
    uncompress: uncompress
};

const characters = ['K', 'M', 'B', 'T']

function compress(number) {
    if (Number.isNaN(Number(number))) throw new Error('The parameter must be a number');
    if (Number(number) < 1000) return Number(number);
    
    function compressStr(number, value, char) {
        if (Number.isInteger(Number(number) / value) === true) {
            return `${(Number(number) / value)}${char}`;
        } else {
            return `${(Number(number) / value).toString().substring(0, (Number(number) / value).toString().length - (Number(number) / value).toString().split(/[.]/)[1].length + 1)}${char}`;
        }
    }
    
    let value = ''
    let multiplier = 1
    characters.forEach(character => {
        multiplier *= 1000
        if (multiplier <= Number(number) && Number(number) < multiplier*1000) {
            value = compressStr(Number(number), multiplier, character)
        }
    });

    if(value != '') {
        return value;
    } else {
        throw new Error('The number is too large');
    }
}

//==================================== UNCOMPRESS FUNCTION ===============================================

function uncompress(value) {
    if (Number.isNaN(Number(value))) {
        let EndsWith = (value) => {
            let _ = false;
            
            _ = characters.some(element => {
                return value.toUpperCase().endsWith(element);
            });
            return _
        };

        if (EndsWith(value)) {
            if (Number.isNaN(Number(value.substring(0, (value.length - 1))))) {
                throw new Error('Invalide argument')
            } else {
                let str = ''
                let multiplier = 1
                characters.forEach(character => {
                    multiplier *= 1000
                    if (value.substring(value.length - 1).toUpperCase() === character) {
                        str = value.substring(0, (value.length - 1)) * multiplier
                    }
                });

                return str
            }
        } else {
            throw new Error('Invalide argument')
        }
    } else {
        return Number(value)
    }
}

console.log(uncompress("10k"))