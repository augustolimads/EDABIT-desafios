function redundant(str) {
	return () => str
}

const f1 = redundant('apple')

console.log(f1())