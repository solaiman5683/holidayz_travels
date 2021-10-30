import React from 'react';
import EventCard from '../Event-Card/Event-card';
const LoadEvents = ({ events }) => {
	return (
		<div className='pb-5'>
			<div className='row row-cols-1 row-cols-md-3 g-4'>
				{events?.map(event => (
					<EventCard key={event._id} event={event} />
				))}
			</div>
		</div>
	);
};

export default LoadEvents;
