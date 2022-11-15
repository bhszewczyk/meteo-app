import React from 'react';
import './EditBtn.css';

export default function EditBtn(props) {
	return (
		<button className='btn-edit' onClick={props.enableEditing}>
			<i className='fa-regular fa-pen-to-square'></i>
		</button>
	);
}
