const fetchDataFromServer = async (url, succCallback, errCallback) => {
	let dataResults = await fetch(url)
		.then((res) => res.json())
		.then(succCallback)
		.catch(errCallback);

	return dataResults;
};

const saveDataOnServer = (
	url,
	config,
	objToEdit,
	succCallback,
	errCallback
) => {
	fetch(url, {
		method: config,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(objToEdit),
	})
		.then(succCallback)
		.catch(errCallback);
};

export { fetchDataFromServer, saveDataOnServer };
