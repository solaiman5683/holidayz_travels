import React from 'react';
import useAuth from '../../hooks/useAuth';
import Adventure from '../Adventure/Adventure';
import Articles from '../Articles/Articles';
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
			<Quotes />
			<Video />
		</div>
	);
};

export default Home;
