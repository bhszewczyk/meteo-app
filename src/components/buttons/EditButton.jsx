import React from 'react';
import './EditButton.css';

// create edit button as a Component - allows reusability in the future
export default function EditButton(props) {
	return (
		<button className='btn-edit' onClick={props.enableEditing}>
			<i className='fa-regular fa-pen-to-square'></i>
		</button>
	);
}
