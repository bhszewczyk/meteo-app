import React, { useState, useEffect } from 'react';
import Report from './Report';
import Form from './Form';
import './ReportList.css';

export default function ReportList(props) {
	// define state to toggle editing option
	const [isEditing, setIsEditing] = useState(false);

	// define object which will be eddited
	const [objToEdit, setObjToEdit] = useState({
		id: '',
		temperature: 0,
		unit: '',
		date: '',
		city: '',
	});

	// define enable editing function which will be passed to the report component
	// and will receive back as param object passed to the single report component
	function enableEditing(data) {
		setIsEditing(true);

		setObjToEdit({
			id: data.id,
			temperature: data.temperature,
			unit: data.unit,
			date: data.date,
			city: data.city,
		});
	}

	// disable edditing
	function closeEditing() {
		setIsEditing(false);
	}

	// update data on edit
	// receive event as param where the name, value and type of the input edited is destructured
	// and used for updating the objToEdit
	function updateData(event) {
		const { name, value, type } = event.target;

		setObjToEdit((oldData) => {
			return {
				...oldData,
				[name]: type === 'number' ? +value : value,
			};
		});
	}

	function sendDataToServer(e) {
		e.preventDefault();
		setIsEditing(false);

		fetch(`http://localhost:8000/api/reports/${objToEdit.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(objToEdit),
		});

		props.detectEdition();
	}

	// create variable which map through the all data and return Report component
	// for each data object
	const reportEls = props.reportData.map((report) => {
		return (
			<Report
				key={report.id}
				reportData={report}
				enableEditing={enableEditing}
			/>
		);
	});

	// return core of the app - repost list and conditionaly - edditing form
	return (
		<main className='reports-container'>
			<h1 className='app-title'>Meteo App</h1>
			{reportEls}
			{isEditing && (
				<Form
					objToEdit={objToEdit}
					updateData={updateData}
					closeEditing={closeEditing}
					sendDataToServer={sendDataToServer}
				/>
			)}
		</main>
	);
}
