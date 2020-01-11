function intOrString(param) {
    return Number.isInteger(param) === true ? 'int'
    : typeof param === 'string' ? 'string'
    : 'other type'
}

console.log(intOrString(1.1))