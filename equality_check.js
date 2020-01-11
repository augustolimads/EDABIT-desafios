function checkEquality(a, b){
    return typeof a === typeof b ? true : false;
}

console.log(checkEquality(1, true))
console.log(checkEquality(1, '1'))
console.log(checkEquality(1, 2))
console.log(checkEquality(NaN, NaN))
