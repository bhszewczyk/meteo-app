function getSortedArray(sortOption, reportData) {
	let sortedArray = [...reportData];
	if (sortOption === 'none') {
		sortedArray;
	} else if (sortOption === 'location') {
		sortedArray = sortedArray.sort((report1, report2) =>
			report1.city.toLowerCase() > report2.city.toLowerCase() ? 1 : -1
		);
	} else if (sortOption === 'temperature') {
		sortedArray = sortedArray.sort((report1, report2) =>
			report1.temperature > report2.temperature ? 1 : -1
		);
	} else if (sortOption === 'date') {
		sortedArray = sortedArray.sort((report1, report2) =>
			report1.date > report2.date ? 1 : -1
		);
	}

	return sortedArray;
}

export default getSortedArray;
