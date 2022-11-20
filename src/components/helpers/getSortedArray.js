import getKelvin from './getKelvin';

function getSortedArray(sortOption, reportData, filter) {
	let sortedArray = [...reportData];
	if (filter !== '') {
		sortedArray = [...reportData].filter((report) => {
			return report.city.toLowerCase().includes(filter.toLowerCase());
		});
	}

	if (sortOption === 'none') {
		sortedArray;
	} else if (sortOption === 'location') {
		sortedArray = sortedArray.sort((report1, report2) =>
			report1.city.toLowerCase() > report2.city.toLowerCase() ? 1 : -1
		);
	} else if (sortOption === 'temperature') {
		sortedArray = sortedArray.sort((report1, report2) => {
			const report1TemperatureK = getKelvin(report1.temperature, report1.unit);
			const report2TemperatureK = getKelvin(report2.temperature, report2.unit);

			return report1TemperatureK.temperature - report2TemperatureK.temperature;
		});
	} else if (sortOption === 'date') {
		sortedArray = sortedArray.sort((report1, report2) =>
			report1.date > report2.date ? 1 : -1
		);
	}

	return sortedArray;
}

export default getSortedArray;
