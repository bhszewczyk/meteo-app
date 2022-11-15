import { useState, useEffect } from 'react';
import './App.css';
import ReportList from './components/views/ReportList';

function App() {
	const [reportData, setReportData] = useState([]);

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

	console.log(reportData);

	return (
		<div className='app'>
			<ReportList reportData={reportData} />
		</div>
	);
}

export default App;
