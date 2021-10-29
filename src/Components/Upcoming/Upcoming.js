import React from 'react';
import EventCard from '../Event/Event-card';
const Upcoming = () => {
	return (
		<div className='py-5 my-5'>
			<h1 className='text-center text-dark'>Upcoming Events</h1>
			<hr className='w-25 mx-auto' />
			<p className='text-center text-info pb-3'>
				Check our best promotional tour.
			</p>
			<div className='container'>
				<div className='row row-cols-1 row-cols-md-3 g-4'>
					<EventCard />
					<EventCard />
					<EventCard />
					<EventCard />
					<EventCard />
					<EventCard />
				</div>
			</div>
		</div>
	);
};

export default Upcoming;
