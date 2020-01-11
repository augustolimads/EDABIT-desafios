function limitNumber(num, rangeLow, rangeHigh) {
   return Math.max(rangeLow, Math.min(rangeHigh, num))
}
console.log(limitNumber(5, 5, 10))