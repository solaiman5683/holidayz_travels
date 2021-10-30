import React from 'react';
import useAuth from '../../hooks/useAuth';
import Adventure from '../Adventure/Adventure';
import Articles from '../Articles/Articles';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Quotes from '../Quotes/Quotes';
import Upcoming from '../Upcoming/Upcoming';
import Video from '../Video/Video';

const Home = () => {
	const { user } = useAuth();

	console.log(user);

	return (
		<div>
			<Navigation />
			<Header />
			<Upcoming />
			<Adventure />
			<Articles />
			<p className='text-center py-3'>
				<button className='rounded booking-btn w-25'>
					Read More Articles {' >>'}
				</button>
			</p>
			<Quotes />
			<Video />
			<Footer />
		</div>
	);
};

export default Home;
