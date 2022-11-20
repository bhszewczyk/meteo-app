// define converter to Kelvin function
function getKelvins(temperature, temperatureUnit) {
	if (temperatureUnit === 'K') {
		return {
			temperature: temperature,
			unit: temperatureUnit,
		};
	} else if (temperatureUnit === 'C') {
		return {
			// convert celsius to kelvin
			// K=℃+273.15
			temperature: temperature + 273.15,
			unit: 'K',
		};
	} else if (temperatureUnit === 'F') {
		return {
			// convert fahrenheit to kelvin
			// K=℃+273.15
			temperature: (temperature - 32) / 1.8 + 273.15,
			unit: 'K',
		};
	}
}

export default getKelvins;
