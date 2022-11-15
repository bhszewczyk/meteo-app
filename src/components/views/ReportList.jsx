import React from 'react';
import Report from './Report';
import './ReportList.css';

export default function ReportList(props) {
	console.log(props.reportData);
	const reportEls = props.reportData.map((report) => {
		return <Report key={report.id} reportData={report} />;
	});

	return (
		<main className='reports-container'>
			<h1 className='app-title'>Meteo App</h1>
			{reportEls}
		</main>
	);
}
