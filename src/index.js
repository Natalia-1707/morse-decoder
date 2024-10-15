const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let expr2 = expr.split("**");
    let n = [];
    let newArr = [];
    let dec = [];
    for (let i = 0; i < expr2.length; i ++) {
        let n = expr2[i];
        let letterStr = [];
        for (let j = 0; j < n.length; j += 10) {
            newArr = n.slice(j, j + 10);
            let letter = "";
            for (let k = 0; k < newArr.length; k+=2) {
                let letterSymbols = newArr.slice(k, k + 2);
                if (letterSymbols === "10") {
                    letter += "."; 
                }
                if (letterSymbols === "11") {
                    letter += "-";
                }
            }
            if (letter) {
                    letterStr.push(letter);
            }
        }
        if (letterStr.length > 0) {
            dec.push(letterStr);
        }
    }
    let phrase = [];
    for (let l = 0; l < dec.length; l++) {
        let oneWord = "";
        for (let m = 0; m < dec[l].length; m++) {
            oneWord += MORSE_TABLE[dec[l][m]]; 
        }
        phrase.push(oneWord);
    }
    console.log(phrase.join(" "))
    return phrase.join(" ");
}

module.exports = {
    decode
}