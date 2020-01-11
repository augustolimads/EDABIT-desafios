function capitalLetters(txt) {
	return txt.match(/[A-Z]/g) == null? 0 : txt.match(/[A-Z]/g).length
}

console.log(capitalLetters("odoaxlnmuyixnpthidus"))