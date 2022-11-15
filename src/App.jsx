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
		fetchReports();
	}, [wasEdited]);

	function fetchReports() {
		fetch('http://localhost:8000/api/reports').then((res) =>
			res.json().then((data) => {
				setReportData(data);
				setWasEdited(false);
			})
		);
	}

	console.log(reportData);

	function detectEdition() {
		setWasEdited(true);
	}

	// render report list
	return (
		<div className='app'>
			<ReportList
				reportData={reportData}
				detectEdition={detectEdition}
				// fetchReports={fetchReports}
			/>
		</div>
	);
}

export default App;
