import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='bg-dark'>
			<div className='container'>
				<footer className='pt-5 pb-3'>
					<ul className='nav justify-content-center border-bottom pb-3 mb-3'>
						<li className='nav-item'>
							<Link to='/' className='nav-link px-2 text-muted'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/about' className='nav-link px-2 text-muted'>
								About us
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/contact' className='nav-link px-2 text-muted'>
								Contact us
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/terms' className='nav-link px-2 text-muted'>
								Terms and conditions
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/sponsors' className='nav-link px-2 text-muted'>
								Sponsors
							</Link>
						</li>
					</ul>
					<p className='text-center text-muted'>© 2021 Company, Inc</p>
				</footer>
			</div>
		</div>
	);
};

export default Footer;
