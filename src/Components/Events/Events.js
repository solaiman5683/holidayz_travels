import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadEvents from '../LoadEvents/LoadEvents';
import Navigation from '../Navigation/Navigation';

const Events = () => {
	const [events, setEvents] = useState();

	useEffect(() => {
		axios
			.get('https://holidayz-travel.herokuapp.com/events')
			.then(response => setEvents(response.data));
	}, []);
	return (
		<div>
			<Navigation />
			<div className='container py-5 mt-5'>
				<div className='row'>
					<div className='col-5'>
						<hr
							style={{
								height: '3px',
							}}
						/>
					</div>
					<div className='col-2 text-center'>
						<h3 className='text-shadow'>All Packages</h3>
					</div>
					<div className='col-5'>
						<hr
							style={{
								height: '3px',
							}}
						/>
					</div>
				</div>
			</div>
			<div className='container'>
				<LoadEvents events={events} />
			</div>
		</div>
	);
};

export default Events;
