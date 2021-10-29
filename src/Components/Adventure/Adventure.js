import React from 'react';

const Adventure = () => {
	return (
		<div className='container py-5'>
			<div className='row'>
				<div className='col-md-6'>
					<img
						src='https://monnampo.sirv.com/Images/Assignment11/travel.svg'
						alt=''
						width='100%'
					/>
				</div>
				<div className='col-md-6 p-5 my-5'>
					<small className='text-info'>About</small>
					<h2>Get ready for real time adventure</h2>
					<p className='text-muted mb-5'>
						Let’s start your journey with us, your dream will come true. If
						you’re ready to take a bite out of the Big Apple, we know exactly
						where you should start. We are your guide, bringing you personal
						experiences. Wherever your travels take you, we’ll show you the
						unique and unmissable things to do in your destination.
					</p>
					<button className='booking-btn shadow rounded-pill'>
						Book Your Destination
					</button>
				</div>
			</div>
		</div>
	);
};

export default Adventure;
