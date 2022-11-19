import React from 'react';
import './Button.css';

export default function Button(props) {
	return (
		<button
			className={`btn ${props.classes}`}
			onClick={() => props.onclick(props.objToEdit)}
		>
			<span>{props.message}</span>
		</button>
	);
}
