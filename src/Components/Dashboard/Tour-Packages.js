import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Table from './Table';
import CreateEvent from '../CreateEvent/CreateEvent';
import Break from './Break';

const TourPackages = () => {
	const { user } = useAuth();
	const { path } = useRouteMatch();
	const [packages, setPackages] = useState();
	const [myPackages, setMyPackages] = useState();

	useEffect(() => {
		axios('https://holidayz-travel.herokuapp.com/events').then(res =>
			setPackages(res.data)
		);
	}, []);
	useEffect(() => {
		axios(
			`https://holidayz-travel.herokuapp.com/my-events?user=${user.uid}`
		).then(res => setMyPackages(res.data));
	}, [user]);

	return (
		<div>
			<p className='text-center mb-5'>
				<NavLink
					to={`${path}/my-packages`}
					activeClassName='text-primary'
					className='btn shadow-none'>
					My Packages
				</NavLink>
				<NavLink
					to={`${path}/all-packages`}
					activeClassName='text-primary'
					className='btn shadow-none'>
					All Packages
				</NavLink>
				<NavLink
					to={`${path}/add-packages`}
					activeClassName='text-primary'
					className='btn shadow-none'>
					Add Packages
				</NavLink>
			</p>
			<Switch>
				<Route exact path={path}>
					<Break text='My Packages' />
					<Table packages={myPackages} />
				</Route>
				<Route exact path={`${path}/my-packages`}>
					<Break text='My Packages' />

					<Table packages={myPackages} />
				</Route>
				<Route exact path={`${path}/all-packages`}>
					<Break text='All Packages' />

					<Table packages={packages} />
				</Route>
				<Route exact path={`${path}/add-packages`}>
					<Break text='Create a new Tour Package' />

					<CreateEvent />
				</Route>
			</Switch>
		</div>
	);
};

export default TourPackages;
