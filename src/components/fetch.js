const fetchDataFromServer = async (url, fn, errFn) => {
	let dataResults = await fetch(url)
		.then((res) => res.json())
		.then(fn)
		.catch(errFn);

	return dataResults;
};

const saveDataOnServer = (url, config, succFn, errFn) => {
	fetch(url, config).then(succFn).catch(errFn);
};

export { fetchDataFromServer, saveDataOnServer };
