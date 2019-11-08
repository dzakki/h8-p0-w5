function berPangkat(num) {
    if (num === 0) {
        return 1;
    }
    // console.log(num)
    return num * berPangkat(num - 1)

}
console.log(berPangkat(5))