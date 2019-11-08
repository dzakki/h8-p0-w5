function sorting(arrNumber) {
    // code di sini
    for (let i = 0; i < arrNumber.length; i++) {
        for (let j = 0; j < arrNumber.length - i; j++) {
            let temp = 0
            if ( arrNumber[j] > arrNumber[j + 1] && arrNumber[j + 1] !== undefined ) {
                temp = arrNumber[j]
                arrNumber[j] = arrNumber[j + 1]
                arrNumber[j + 1] = temp
            }
        }
    }
    return arrNumber
}

function getTotal(arrNumber) {
    // code di sini
    if (!arrNumber.length) return ' '

    let objOfTotal = {

    }
    for (let i = 0; i < arrNumber.length; i++) {
        if ( objOfTotal[arrNumber[i]] === undefined ) 
            objOfTotal[arrNumber[i]] = 1
        else
            objOfTotal[arrNumber[i]] ++    
    }
    return `angka paling besar adalah ${arrNumber[arrNumber.length-1]} dan jumlah kemunculan sebanyak ${objOfTotal[arrNumber[arrNumber.length-1]]} kali`
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''