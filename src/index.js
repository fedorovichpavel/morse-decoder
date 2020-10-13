const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const morseArr = Object.values(MORSE_TABLE);
    const morseNameArr = Object.getOwnPropertyNames(MORSE_TABLE);
    let result = '';
    let result1 = '';

    expr = expr.match(/.{1,10}/g);

    expr.forEach((e) => {
        result = e.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-').replace(/\*/g, '');
        for (let i = 0; i < morseArr.length; i++) {
            if (result === '') { result1 += ' '; break }
            if (result === morseNameArr[i]) {
                result1 += morseArr[i];
                break
            }
        }
        result = '';
    });

    return result1;

}

module.exports = {
    decode
}