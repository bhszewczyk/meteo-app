import React from 'react';
import './Report.css';

export default function Report(props) {
	const { city, date, temperature, unit: temperatureUnit } = props.reportData;

	console.log(city, date, temperature, temperatureUnit);

	const displayTemperature = getKelvins(temperature, temperatureUnit);

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

	const iconColorClass = getTemperatureInterpretation(
		displayTemperature.temperature
	);

	// function getTemperatureInterpretation(temperature) {
	// 	if (temperature > 303) {
	// 		return 'hot';
	// 	} else if (temperature <= 303 && temperature < 293) {
	// 		return 'warm';
	// 	} else if (temperature <= 293 && temperature < 283) {
	// 		return 'cool';
	// 	} else {
	// 		return 'freezing';
	// 	}
	// }

	function getTemperatureInterpretation(temperature) {
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

	return (
		<div className='report-container'>
			<div className='report-temperature'>
				<div className='temp-icon'>
					<i className={iconColorClass}></i>
				</div>
				<div className='report-data--temp'>
					{Math.round(displayTemperature.temperature)}
					<span className='report-data--temp-unit'>
						{displayTemperature.unit}
					</span>
				</div>
			</div>
			<div className='report-data'>
				<div className='report-data--date'>{date}</div>
				<div className='report-data--location'>{city}</div>
			</div>
		</div>
	);
}
