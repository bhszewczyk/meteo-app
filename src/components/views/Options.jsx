import React from 'react';
import './Options.css';

export default function Options(props) {
	return (
		<div className='options-container'>
			<input
				type='text'
				className='filter'
				placeholder='- Filter by location -'
				value={props.filterBy}
				onChange={(e) => props.defineFiltering(e)}
			/>
			<label htmlFor='sort'>Sort by:</label>
			<select
				id='sort'
				value={props.sortBy}
				onChange={(e) => props.defineSorting(e)}
			>
				<option value='none'>- none -</option>
				<option value='temperature'>temperature</option>
				<option value='location'>location</option>
				<option value='date'>date</option>
			</select>
		</div>
	);
}
