import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const About = () => {
	return (
		<div>
			<Navigation />
			<h2 className='mt-5 py-5 text-center'>About Us</h2>
			<div className='container'>
				<hr />
				<div className='row align-items-center py-4'>
					<div className='col-md-6 text-center'>
						<img
							src='https://monnampo.sirv.com/Images/Assignment11/undraw_travel_together_re_kjf2.svg'
							alt=''
							height='500px'
						/>
					</div>
					<div className='col-md-6'>
						<div class='pe-md-7'>
							<div class='mb-5'>
								<h2 class='mb-3'>Make Your Tour Amazing With us</h2>
								<p class='fs-4'>
									We are a well established tour agencies provider in Dhaka,
									Bangladesh. We are providing tour packages for you withing 40+
									country. We are also providing local tour guide around the
									world.
								</p>
							</div>
							<Link class='btn booking-btn text-light' to='/tours'>
								See our Tour Packages
							</Link>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
