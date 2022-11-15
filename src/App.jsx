import { useState, useEffect } from 'react';
import './App.css';
import ReportList from './components/views/ReportList';
import fetchDataFromServer from './components/fetch';

function App() {
	// define state for the whole data
	// const [reportData, setReportData] = useState([]);
	const [reportData, setReportData] = useState([]);

	// define state to detect submitting data to server
	const [wasEdited, setWasEdited] = useState(false);

	// fetch data from the server on the first app render
	useEffect(() => {
		fetchDataFromServer('http://localhost:8000/api/reports', (data) => {
			setReportData(data);
			resetEdition();
		});
	}, [wasEdited]);

	function detectEdition() {
		setWasEdited(true);
	}

	function resetEdition() {
		setWasEdited(false);
	}

	// render report list
	return (
		<div className='app'>
			<ReportList
				reportData={reportData}
				detectEdition={detectEdition}
				resetEdition={resetEdition}
			/>
		</div>
	);
}

export default App;
