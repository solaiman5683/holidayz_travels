import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoadEvents from '../LoadEvents/LoadEvents';

const Events = () => {
	const [events, setEvents] = useState();

	useEffect(() => {
		axios
			.get('https://holidayz-travel.herokuapp.com/events')
			.then(response => setEvents(response.data));
	});
	return (
		<div>
			<div className='container py-5'>
				<NavLink className='nav-link py-4 fs-5' to='/'>
					<i class='fad fa-home-lg'></i> Go to Home
				</NavLink>
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
