import React from 'react';
import './Report.css';
import EditBtn from '../buttons/EditBtn';
import getKelvin from '../helpers/getKelvin';

export default function Report(props) {
	// get business logic for UI from useKelvin custom hook
	const { displayTemp, displayUnit, iconColorClass, date, city } = getKelvin(
		props.reportData
	);

	// return single weather report component
	return (
		<div className='report-container'>
			<div className='report-temperature'>
				<div className='temp-icon'>
					<i className={iconColorClass}></i>
				</div>
				<div className='report-data--temp'>
					{Math.round(displayTemp)}
					<span className='report-data--temp-unit'>{displayUnit}</span>
				</div>
			</div>
			<div className='report-data'>
				<div className='report-data--date'>{date}</div>
				<div className='report-data--location'>{city}</div>
			</div>
			<EditBtn enableEditing={() => props.enableEditing(props.reportData)} />
		</div>
	);
}
