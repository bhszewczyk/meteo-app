import React from 'react';
import './Error.css';

export default function Error(props) {
	return (
		<div className='error'>
			<h1>{props.message}</h1>
		</div>
	);
}
