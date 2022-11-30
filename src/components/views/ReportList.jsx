import React, { useEffect } from 'react';
import Report from './Report';
import Form from './Form';
import Error from './Error';
import Btn from '../buttons/Button';
import './ReportList.css';
import useReportList from '../hooks/useReportList';

export default function ReportList(props) {
	// create variable which map through the all data and return Report component
	// for each data object

	const {
		saveSuccess,
		enableEditing,
		isEditing,
		wasEdited,
		objToEdit,
		updateData,
		closeEditing,
		sendDataToServer,
	} = useReportList();

	const reportElements = props.reportData.map((report) => {
		return (
			<Report
				key={report.id}
				reportData={report}
				enableEditing={enableEditing}
			/>
		);
	});
	//
	useEffect(() => {
		props.detectEdition();
	}, [wasEdited]);

	// return core of the app - repost list and conditionaly - edditing form
	return (
		<main className='reports-container'>
			{!saveSuccess ? <Error message='Saving not succeeded...' /> : ''}
			<div className='reports-wrapper'>{reportElements}</div>
			<div className='btn-container align-right'>
				<Btn message='+' onclick={enableEditing} classes='btn-round'>
					{React.createElement('i', {
						className: 'fa-sharp fa-solid fa-plus-large icon',
					})}
				</Btn>
			</div>
			{isEditing ? (
				<Form
					objToEdit={objToEdit}
					updateData={updateData}
					closeEditing={closeEditing}
					sendDataToServer={sendDataToServer}
				/>
			) : (
				''
			)}
		</main>
	);
}
