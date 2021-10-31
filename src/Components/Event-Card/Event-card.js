import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
	const { _id, name, image, country, time, price } = event;
	return (
		<div className='col'>
			<div className='card h-100 border-0 shadow-sm rounded'>
				<Link to={`/tours/${_id}`}>
					<div
						className='card-img-top'
						style={{
							width: '100%',
							height: '300px',
							background: `url('${image}')`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
						}}
					/>
				</Link>
				<div className='card-body'>
					<small className='text-muted'>{time}</small>
					<h4 className='card-title text-capitalize'>{name}</h4>
					<div className='d-flex justify-content-between align-items-center'>
						<small>
							<i className='fad fa-map-marker-alt text-primary'></i> {country}
						</small>
						<button className='btn btn-default text-primary'>
							${price} / Per Person
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
