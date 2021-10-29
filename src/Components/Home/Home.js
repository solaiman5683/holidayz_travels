import React from 'react';
import useAuth from '../../hooks/useAuth';
import Adventure from '../Adventure/Adventure';
import Articles from '../Articles/Articles';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Upcoming from '../Upcoming/Upcoming';

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
		</div>
	);
};

export default Home;
