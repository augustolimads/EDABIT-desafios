function cityFacts(city) {
	return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`
}

console.log(cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
}))