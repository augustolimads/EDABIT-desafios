function sevenBoom(arr) {
    return arr.join('').includes('7') ? 'Boom!' : 'there is no 7 in the array'
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 77]))