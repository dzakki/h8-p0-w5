function kaliTerusRekursif(angka) {
    // you can only write your code here!
    angka = String(angka)
    if (angka.length == 1) {
        return angka
    }
    let result = 1
    for (let i = 0; i < angka.length; i++) {
        result = result * angka[i]
    }
    return kaliTerusRekursif(result)
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6