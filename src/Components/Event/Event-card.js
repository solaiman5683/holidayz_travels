import React from 'react';

const EventCard = () => {
	return (
		<div className='col'>
			<div className='card border-0 shadow-sm rounded'>
				<div
					className='card-img-top'
					style={{
						width: '100%',
						height: '300px',
						background:
							'url("https://preview.colorlib.com/theme/vacation/images/destination-1.jpg.webp")',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
					}}
				/>
				<div className='card-body'>
					<small className='text-muted'>3 day tour</small>
					<h4 className='card-title'>Bali, Indonesia</h4>
					<div className='d-flex justify-content-between align-items-center'>
						<small>
							<i className='fad fa-map-marker-alt text-primary'></i> Indonesia
						</small>
						<button className='btn btn-default text-primary'>
							$200 / Per Person
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
