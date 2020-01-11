function isIdentical(s) {
    const expretion = currentValue => currentValue == s[0];
    return [...s].every(expretion);
}


// function isIdentical2(s) {
//     return [...s].forEach(item => [...s].indexOf(0) == item);
// }

// function isIdentical3(s) {
//     return s.includes(!s[0])
// }

// function isIdentical3(s) {
//     return s.every()
// }

console.log(isIdentical('ssssss'))