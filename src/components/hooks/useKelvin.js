function useKelvin(reportObj) {
	// destruct reportObjfor clarity purposes
	const { temperature, unit: temperatureUnit, date, city } = reportObj;

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

	// define styling helper function to receive proper classes
	function getTemperatureInterpretationClass(temperature) {
		if (temperature > 303) {
			return 'fa-solid fa-temperature-full icon-hot';
		} else if (temperature <= 303 && temperature > 293) {
			return 'fa-solid fa-temperature-half icon-warm';
		} else if (temperature <= 293 && temperature > 283) {
			return 'fa-solid fa-temperature-quarter icon-cool';
		} else {
			return 'fa-solid fa-temperature-empty icon-freezing';
		}
	}

	// create variable which will assign temperature in Kelvin
	const displayTemperature = getKelvins(temperature, temperatureUnit);

	// create variable for styling classes
	const iconColorClass = getTemperatureInterpretationClass(
		displayTemperature.temperature
	);

	// return object with properties needed for UI
	return {
		displayTemp: displayTemperature.temperature,
		displayUnit: displayTemperature.unit,
		iconColorClass,
		date,
		city,
	};
}

export default useKelvin;
