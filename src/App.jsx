import { useState, useEffect } from 'react';
import './App.css';
import ReportList from './components/views/ReportList';

function App() {
	// define state fot the whole data
	const [reportData, setReportData] = useState([]);

	// fetch data from the server on the first app render
	useEffect(() => {
		fetchReports();
	}, []);

	function fetchReports() {
		fetch('http://localhost:8000/api/reports').then((res) =>
			res.json().then((data) => {
				setReportData(data);
			})
		);
	}

	// render report list
	return (
		<div className='app'>
			<ReportList reportData={reportData} />
		</div>
	);
}

export default App;
