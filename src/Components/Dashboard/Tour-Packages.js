import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import Table from './Table';
const TourPackages = () => {
	const { path } = useRouteMatch();
	return (
		<div>
			<p className='text-center'>
				<NavLink to='my' className='btn'>
					My Packages
				</NavLink>
				<NavLink to='my' className='btn'>
					All Packages
				</NavLink>
			</p>
			<Switch>
				<Route path={`${path}/my-packages`}>
					<Table />
				</Route>
				<Route path={`${path}/all-packages`}>
					<Table />
				</Route>
			</Switch>
		</div>
	);
};

export default TourPackages;
