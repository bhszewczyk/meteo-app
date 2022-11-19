import { useState, useEffect } from 'react';
import './App.css';
import ReportList from './components/views/ReportList';
import Error from './components/views/Error';
import { fetchDataFromServer } from './components/helpers/fetch';
import './helperClasses.css';

function App() {
	// define state for the whole data
	const [reportData, setReportData] = useState([]);

	// define state to detect submitting data to server
	const [wasEdited, setWasEdited] = useState(false);

	// define error state
	const [isError, setIsError] = useState(false);

	// fetch data from the server on the first app render
	useEffect(() => {
		fetchDataFromServer((data) => {
			setReportData(data);
			resetEdition();
		}, handleError);
	}, [wasEdited]);

	function detectEdition() {
		setWasEdited(true);
	}

	function resetEdition() {
		setWasEdited(false);
	}

	function handleError() {
		setIsError(true);
	}

	// render report list
	return (
		<div className='app'>
			{!isError && (
				<ReportList
					reportData={reportData}
					detectEdition={detectEdition}
					resetEdition={resetEdition}
				/>
			)}
			{isError && <Error message='Failed to fetch data' />}
		</div>
	);
}

export default App;
