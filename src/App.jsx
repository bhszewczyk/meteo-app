import { useState, useEffect } from 'react';
import './App.css';

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

	return <div className='App'></div>;
}

export default App;
