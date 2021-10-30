import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='d-flex align-items-center justify-content-center vh-100'>
			<div>
				<img
					src='https://monnampo.sirv.com/Images/Assignment11/404.svg'
					alt=''
				/>
				<h1 className='mt-5 text-center '>
					<Link to='/' className='text-decoration-none'>
						Back to Home Page
					</Link>
				</h1>
			</div>
		</div>
	);
};

export default NotFound;
