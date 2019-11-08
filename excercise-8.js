function hapusSimbol(str) {
    // you can only write your code here!
    // let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    // let alphanum = '1234567890'
    // let result = ''
    // for (let i = 0; i < str.length; i++) {
    //     for (let j = 0; j < alphabets.length; j++) {
    //         if (str[i] === alphabets[j]) {
    //             result += alphabets[j]
    //             break
    //         }
    //     }
    //     for (let j = 0; j < alphanum.length; j++) {
    //         if (str[i] === alphanum[j]) {
    //             result += alphanum[j]
    //             break
    //         }
    //     }
    // }
    // return result
    

    let result = str.replace(/[^\w]/g, '' )
    return result
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100

