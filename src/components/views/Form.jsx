import React from 'react';
import './Form.css';
import Btn from '../buttons/Btn';

// create form component where inputs are controlled by the state of objToEdit
export default function Form(props) {
	console.log(props);
	return (
		<div className='form-container'>
			<form onSubmit={(e) => props.sendDataToServer(e)} className='edit-form'>
				<div className='inputs'>
					<input
						type='text'
						className='text-input city'
						placeholder='City'
						onChange={props.updateData}
						value={props.objToEdit.city}
						name='city'
						required
					/>
					<label htmlFor=''></label>
					<input
						type='date'
						className='text-input date'
						placeholder='YYYY-MM-DD'
						onChange={props.updateData}
						value={props.objToEdit.date}
						name='date'
						required
					/>
					<div className='temperature-setup'>
						<input
							type='number'
							className='number-input temperature'
							placeholder='0'
							onChange={props.updateData}
							value={props.objToEdit.temperature}
							name='temperature'
							required
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
					<Btn
						message='Save'
						onclick={() => {
							return;
						}}
					/>
				</div>
				<span className='close' onClick={props.closeEditing}>
					x
				</span>
			</form>
		</div>
	);
}
