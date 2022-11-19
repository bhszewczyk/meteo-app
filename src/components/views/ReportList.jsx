import React, { useState, useEffect } from 'react';
import Report from './Report';
import Form from './Form';
import Error from './Error';
import Btn from '../buttons/Btn';
import './ReportList.css';
import { saveDataOnServer } from '../fetch';

export default function ReportList(props) {
	// define state to toggle editing option
	const [isEditing, setIsEditing] = useState(false);

	const [saveSuccess, setSaveSuccess] = useState(true);

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
	function enableEditing(
		data = {
			id: '',
			temperature: '',
			unit: '',
			date: '',
			city: '',
		}
	) {
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

		console.log(objToEdit);

		const saveSuccess = () => setSaveSuccess(true);
		const saveFailed = () => {
			console.log('fail');
			setSaveSuccess(false);
			setTimeout(() => {
				setSaveSuccess(true);
			}, 3000);
		};

		if (objToEdit.id !== '') {
			saveDataOnServer(
				`http://localhost:8000/api/reports/${objToEdit.id}`,
				'PUT',
				objToEdit,
				saveSuccess,
				saveFailed
			);
		} else {
			const reportToAdd = {
				temperature: objToEdit.temperature,
				unit: objToEdit.unit,
				date: objToEdit.date,
				city: objToEdit.city,
			};
			saveDataOnServer(
				'http://localhost:8000/api/reports',
				'POST',
				reportToAdd,
				saveSuccess,
				saveFailed
			);
		}

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
			{!saveSuccess && <Error message='Saving not succeeded...' />}
			<div className='btn-container align-right'>
				<Btn message='+' onclick={enableEditing} classes='btn-square'>
					{React.createElement('i', {
						className: 'fa-sharp fa-solid fa-plus-large icon',
					})}
				</Btn>
			</div>
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
