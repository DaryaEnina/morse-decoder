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
    let entries =  Object.entries(MORSE_TABLE);
    let arr = [];
  
    for (let i = 0; i < expr.length; i += 10) {
      if (expr.substr(i, 10) === '**********') {
        arr.push(' ');
      } else {
        arr.push(expr.substr(i, 10));
      }
    }
  
    arr = arr.map( (item) => item.match(/.{1,2}/g)
                                 .filter( (item) => item != '00')
                                 .map( (item) =>  item === ' ' ? item : item === '10' ? item = '.' : '-')
                                 .join(''));
  
    for (let i = 0; i < entries.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (entries[i][0] === arr[j]) {
          arr[j] = entries[i][1];
        }
      }
    }
  
    return arr.join('');
  }
  
  module.exports = {
    decode
  }