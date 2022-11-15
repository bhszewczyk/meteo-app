import React, { useState } from 'react';
import Report from './Report';
import Form from './Form';
import './ReportList.css';

export default function ReportList(props) {
	const [isEditing, setIsEditing] = useState(true);
	const [objToEdit, setObjToEdit] = useState({
		id: '',
		temperature: 0,
		unit: '',
		date: '',
		city: '',
	});

	function enableEditing(data) {
		console.log('edit');
		console.log(data);
		setIsEditing(true);

		setObjToEdit({
			id: data.id,
			temperature: data.temperature,
			unit: data.unit,
			date: data.date,
			city: data.city,
		});
	}

	function closeEditing() {
		setIsEditing(false);
	}

	function updateData(event) {
		console.log('updating');
		console.log(event);

		const { name, value, type } = event.target;

		setObjToEdit((oldData) => {
			return {
				...oldData,
				[name]: type === 'number' ? +value : value,
			};
		});
	}

	const reportEls = props.reportData.map((report) => {
		return (
			<Report
				key={report.id}
				reportData={report}
				enableEditing={enableEditing}
			/>
		);
	});

	return (
		<main className='reports-container'>
			<h1 className='app-title'>Meteo App</h1>
			{reportEls}
			{isEditing && (
				<Form
					objToEdit={objToEdit}
					updateData={updateData}
					closeEditing={closeEditing}
				/>
			)}
		</main>
	);
}

//<div className=''>{isEditing && <Form />}</div>
