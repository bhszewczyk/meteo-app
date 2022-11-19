const URL = 'http://localhost:8000/api/reports';

const fetchDataFromServer = async (succCallback, errCallback) => {
	let dataResults = await fetch(URL)
		.then((res) => res.json())
		.then(succCallback)
		.catch(errCallback);

	return dataResults;
};

const saveDataOnServer = (restApi, config) => {
	fetch(URL + restApi, {
		method: config.method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(config.objToEdit),
	})
		.then(config.succCallback)
		.catch(config.errCallback);
};

export { fetchDataFromServer, saveDataOnServer };
