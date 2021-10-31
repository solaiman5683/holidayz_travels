import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import useAuth from '../../hooks/useAuth';
import Adventure from '../Adventure/Adventure';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Quotes from '../Quotes/Quotes';
import LoadEvents from '../LoadEvents/LoadEvents';
import Video from '../Video/Video';
import { Link } from 'react-router-dom';
import Article from '../Article/Article';
import Break from '../Dashboard/Break';

const Home = () => {
	// const { user } = useAuth();
	const [events, setEvents] = useState();
	const [blogs, setBlogs] = useState();

	useEffect(() => {
		axios
			.get('https://holidayz-travel.herokuapp.com/blogs?limit=4')
			.then(response => setBlogs(response.data));
	}, []);
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
			<div className='container'>
				<Break text='Recent Articles' />
				<div className='row row-cols-1 row-cols-md-2 g-4 my-3'>
					{blogs?.map(blog => (
						<Article key={blog._id} blog={blog} />
					))}
				</div>
				<div className='text-center py-5'>
					<Link
						to='/blogs'
						className='rounded-pill booking-btn px-5 text-light text-decoration-none'>
						Read More Articles {' >>'}
					</Link>
				</div>
			</div>

			<Quotes />
			<Video />
			<Footer />
		</div>
	);
};

export default Home;
