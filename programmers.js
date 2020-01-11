function programmers(one, two, three) {
    return Math.max(...arguments) - Math.min(...arguments)
}

console.log(programmers(147, 33, 526))