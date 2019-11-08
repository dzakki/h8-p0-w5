function changeVocals (str) {
    //code di sini
    let alphabetsLow = 'abcdefghijklmnopqrstuvwxyz'
    let alphabetsUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let result = ''
    for (let i = 0; i < str.length; i++) {
        let bool = 0
        for (let j = 0; j < alphabetsLow.length; j++) {
            if (str[i] === alphabetsLow[j]) {
                result += alphabetsLow[j + 1]
                bool = 1
                break;
            }
            if (str[i] === alphabetsUp[j]) {
                result += alphabetsUp[j + 1]
                bool = 1
                break;
            }
        }
        if (!bool) {
            result += str[i]
        }
    } 
    return result
}
  
function reverseWord (str) {
    //code di sini
    let result = ''
    for (let i =  (str.length - 1) ; i >= 0; i--) {
        result += str[i]
    }
    return result
}
  
function setLowerUpperCase (str) {

    let alphabetsLow = 'abcdefghijklmnopqrstuvwxyz'
    let alphabetsUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    let result = ''

    for (let i = 0; i < str.length; i++) {
        let bool = 0
        for (let j = 0; j < alphabetsUp.length; j++) {
            if (str[i] === alphabetsUp[j]) {
                result += alphabetsLow[j]
                bool = 1
                break;
            }
            if (str[i] === alphabetsLow[j]) {
                result += alphabetsUp[j]
                bool = 1
                break;
            }
        }
        if (!bool) {
            result += str[i]
        }
    }
    
    return result
}
  
function removeSpaces (str) {
    //code di sini
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i]
        }
    }
    return result
}
  
function passwordGenerator (name) {
    //code di sini
    if (name.length <= 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    
    let resOfchangeVocals = changeVocals(name)
    let resOfReverseWord = reverseWord(resOfchangeVocals)
    let resOfSetLowerUpperCase = setLowerUpperCase(resOfReverseWord)
    let resRemoveSpaces = removeSpaces(resOfSetLowerUpperCase)

    return resRemoveSpaces
}
  
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'