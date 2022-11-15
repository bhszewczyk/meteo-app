const fetchDataFromServer = async (url, succCallback, errCallback) => {
	let dataResults = await fetch(url)
		.then((res) => res.json())
		.then(succCallback)
		.catch(errCallback);

	return dataResults;
};

const saveDataOnServer = (url, config, succCallback, errCallback) => {
	fetch(url, config).then(succCallback).catch(errCallback);
};

export { fetchDataFromServer, saveDataOnServer };
