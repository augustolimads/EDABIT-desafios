/*function identicalFilter(arr) {
    return arr.filter(word => word.length <= 1 || word[0] == word.forEach(char => char)
}*/

function identicalFilter(arr) {
    String(arr)
    return (arr.filter(word => word.split('').every(char => char === word[0])))
}

console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]));

/*
map
filter
every
set

*/