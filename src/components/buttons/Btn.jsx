import React from 'react';
import './Btn.css';

export default function Btn(props) {
	return (
		<button
			className={`btn ${props.classes}`}
			onClick={() => props.onclick(props.objToEdit)}
		>
			{props.message}
		</button>
	);
}
