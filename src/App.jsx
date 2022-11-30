import { useState, useEffect } from 'react';
import './App.css';
import ReportList from './components/views/ReportList';
import Options from './components/views/Options';
import Error from './components/views/Error';
import { fetchDataFromServer } from './components/helpers/fetch';
import './helperClasses.css';
import getSortedArray from './components/helpers/getSortedArray';

function App() {
	// define state for the whole data
	const [reportData, setReportData] = useState([]);

	// define state to detect submitting data to server
	const [wasEdited, setWasEdited] = useState(false);

	// define error state
	const [isError, setIsError] = useState(false);

	// define sort state
	const [sortBy, setSortBy] = useState('none');

	// define filter state
	const [filterBy, setFilterBy] = useState('');

	// fetch data from the server on the first app render
	useEffect(() => {
		fetchDataFromServer((data) => {
			setReportData(data);
			resetEdition();
		}, handleError);
	}, [wasEdited]);

	function detectEdition() {
		setWasEdited(true);
	}

	function resetEdition() {
		setWasEdited(false);
	}

	function handleError() {
		setIsError(true);
	}

	function defineSorting(e) {
		setSortBy(e.target.value);
	}

	function defineFiltering(e) {
		setFilterBy(e.target.value);
	}

	const sortedArray = getSortedArray(sortBy, reportData, filterBy);

	// render report list
	return (
		<div className='app'>
			<h1 className='app-title'>Meteo App</h1>
			{!isError && (
				<>
					<Options
						sortBy={sortBy}
						defineSorting={defineSorting}
						filterBy={filterBy}
						defineFiltering={defineFiltering}
					/>
					<ReportList
						reportData={sortedArray}
						detectEdition={detectEdition}
						resetEdition={resetEdition}
						wasEdited={wasEdited}
					/>
				</>
			)}
			{isError && <Error message='Failed to fetch data' />}
		</div>
	);
}

export default App;
