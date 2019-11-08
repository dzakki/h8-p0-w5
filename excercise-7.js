function meleeRangedGrouping (str) {
    //your code here
    let resultOfName = []
    let resultOfType = {}

    let tempOfName = ''

    for (let i = 0; i < str.length; i++) {

        // mencari tipe
        if (str[i] === '-') {
            let tempOfType = ''
            for (let j = i + 1; j < str.length; j++) {
                if (str[j] === ',') {
                    if (resultOfType[tempOfType] === undefined) { // menaruh tipe ke resultOfType
                        resultOfType[tempOfType]  = []
                    }
                    break
                }
                tempOfType += str[j] // menampung nama tipe
            }
        }
        // mengelompokan nama berdasarkan tipe
        if (str[i] == '-') {
            let tempOfType = '' // menampung tipe by nama
            for (let j = i + 1; j < str.length; j++) {
                if (str[j] === ',') {  // 
                    resultOfType[tempOfType].push(tempOfName) // push nama berdasarkan tipe
                    tempOfName = ''
                    i = j + 1 // index i menjadi index j+1 ( index ke koma ',' ) berikutnya
                    break
                }
                tempOfType += str[j] // menampung tipe by nama
            }
        }
        tempOfName += str[i]
    }

    for (const key in resultOfType) {
        resultOfName.push(resultOfType[key])
    }

    return resultOfName
    
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []