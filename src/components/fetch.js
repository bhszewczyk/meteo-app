const URL = 'http://localhost:8000/api/reports/';

const fetchDataFromServer = async (url, succCallback, errCallback) => {
	let dataResults = await fetch(url)
		.then((res) => res.json())
		.then(succCallback)
		.catch(errCallback);

	return dataResults;
};

const saveDataOnServer = (
	url,
	method,
	objToEdit,
	succCallback,
	errCallback
) => {
	console.log(JSON.stringify(objToEdit));
	fetch(url, {
		method: method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(objToEdit),
	})
		.then(succCallback)
		.catch(errCallback);
};

export { fetchDataFromServer, saveDataOnServer };
