import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import useAuth from '../../hooks/useAuth';
import Adventure from '../Adventure/Adventure';
import Articles from '../Articles/Articles';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Quotes from '../Quotes/Quotes';
import LoadEvents from '../LoadEvents/LoadEvents';
import Video from '../Video/Video';
import { Link } from 'react-router-dom';

const Home = () => {
	// const { user } = useAuth();
	const [events, setEvents] = useState();

	useEffect(() => {
		axios
			.get('https://holidayz-travel.herokuapp.com/events?limit=6')
			.then(response => setEvents(response.data));
	}, []);

	return (
		<div>
			<Navigation />
			<Header />
			<div className='container pt-5 mt-5'>
				<h1 className='text-center text-dark'>Latest Tour Packages</h1>
				<hr className='w-25 mx-auto' />
				<p className='text-center text-info pb-3'>
					Check our best promotional tour.
				</p>
				<LoadEvents events={events} />
			</div>
			<Adventure />
			<Articles />
			<p className='text-center py-3'>
				<Link
					to='/blogs'
					className='rounded booking-btn w-25 text-light text-decoration-none'>
					Read More Articles {' >>'}
				</Link>
			</p>
			<Quotes />
			<Video />
			<Footer />
		</div>
	);
};

export default Home;
