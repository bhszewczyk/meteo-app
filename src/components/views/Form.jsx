import React from 'react';
import './Form.css';

export default function Form(props) {
	console.log(props.objToEdit);
	return (
		<div className='form-container'>
			<form action='' className='edit-form'>
				<div className='inputs'>
					<input
						type='text'
						className='text-input city'
						placeholder='City'
						onChange={props.updateData}
						value={props.objToEdit.city}
						name='city'
					/>
					<label htmlFor=''></label>
					<input
						type='text'
						className='text-input date'
						placeholder='YYYY-MM-DD'
						onChange={props.updateData}
						value={props.objToEdit.date}
						name='date'
					/>
					<div className='temperature-setup'>
						<input
							type='number'
							className='number-input temperature'
							placeholder='0'
							onChange={props.updateData}
							value={props.objToEdit.temperature}
							name='temperature'
						/>
						<select
							name='unit'
							id='unit'
							value={props.objToEdit.unit}
							onChange={props.updateData}
						>
							<option value='C'>C</option>
							<option value='K'>K</option>
							<option value='F'>F</option>
						</select>
					</div>
					<button className='btn'>Edit</button>
				</div>
				<span className='close' onClick={props.closeEditing}>
					x
				</span>
			</form>
		</div>
	);
}
