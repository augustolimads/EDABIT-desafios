function isInRange(num, range) {
	return num >= range.min && num <= range.max
}

console.log(isInRange(1, {min: 0, max: 5}))