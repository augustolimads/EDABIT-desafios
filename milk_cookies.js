function timeForMilkAndCookies(date) {
	return date.getMonth() == 11 && date.getDate() == 24
}



console.log(timeForMilkAndCookies(new Date(2015,11,24)))

