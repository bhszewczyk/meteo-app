const fetchDataFromServer = async (url, fn) => {
	let dataResults = await fetch(url)
		.then((res) => res.json())
		.then(fn);

	return dataResults;
};

export default fetchDataFromServer;
