function isPlural(word) {
	return word[word.length - 1] === 's'
}

console.log(isPlural('casa'))

/*
word.endsWith('s')
*/