import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadEvents from '../LoadEvents/LoadEvents';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Break from '../Dashboard/Break';

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
				<Break text='All Packages' />
			</div>
			<div className='container'>
				<LoadEvents events={events} />
			</div>
			<Footer />
		</div>
	);
};

export default Events;
