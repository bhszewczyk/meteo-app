import { useState } from 'react';
import { saveDataOnServer } from '../helpers/fetch';

function useReportList() {
	// define state to toggle editing option
	const [isEditing, setIsEditing] = useState(false);

	const [saveSuccess, setSaveSuccess] = useState(true);

	// define object which will be eddited
	const [objToEdit, setObjToEdit] = useState({
		id: '',
		temperature: '',
		unit: '',
		date: '',
		city: '',
	});

	// define enable editing function which will be passed to the report component
	// and will receive back as param object passed to the single report component
	function enableEditing(
		data = {
			id: '',
			temperature: '',
			unit: '',
			date: '',
			city: '',
		}
	) {
		setIsEditing(true);

		setObjToEdit({
			id: data.id,
			temperature: data.temperature,
			unit: data.unit,
			date: data.date,
			city: data.city,
		});
	}

	// disable edditing
	function closeEditing() {
		setIsEditing(false);
	}

	// update data on edit
	// receive event as param where the name, value and type of the input edited is destructured
	// and used for updating the objToEdit
	function updateData(event) {
		const { name, value, type } = event.target;

		setObjToEdit((oldData) => {
			return {
				...oldData,
				[name]: type === 'number' ? value : value,
			};
		});
	}

	function sendDataToServer(e) {
		e.preventDefault();
		setIsEditing(false);

		// convert submited input string to number for temperature
		objToEdit.temperature = +objToEdit.temperature;

		const saveSuccess = () => setSaveSuccess(true);
		const saveFailed = () => {
			setSaveSuccess(false);
			setTimeout(() => {
				setSaveSuccess(true);
			}, 3000);
		};

		if (objToEdit.id !== '') {
			saveDataOnServer(`/${objToEdit.id}`, {
				method: 'PUT',
				objToEdit,
				succCallback: saveSuccess,
				errCallback: saveFailed,
			});
		} else {
			const reportToAdd = {
				temperature: objToEdit.temperature,
				unit: objToEdit.unit,
				date: objToEdit.date,
				city: objToEdit.city,
			};
			saveDataOnServer('', {
				method: 'POST',
				objToEdit: reportToAdd,
				succCallback: saveSuccess,
				errCallback: saveFailed,
			});
		}
	}

	return {
		saveSuccess,
		enableEditing,
		isEditing,
		objToEdit,
		updateData,
		closeEditing,
		sendDataToServer,
	};
}

export default useReportList;
