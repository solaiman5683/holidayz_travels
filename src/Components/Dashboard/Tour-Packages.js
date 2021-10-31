import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Table from './Table';
import CreateEvent from '../CreateEvent/CreateEvent';
import EditEvent from '../EditEvent/EditEvent';

const TourPackages = () => {
	const { user } = useAuth();
	const { path } = useRouteMatch();
	const [packages, setPackages] = useState();
	const [myPackages, setMyPackages] = useState();

	useEffect(() => {
		axios('http://localhost:5000/events').then(res => setPackages(res.data));
	}, []);
	useEffect(() => {
		axios(`http://localhost:5000/my-events?user=${user.uid}`).then(res =>
			setMyPackages(res.data)
		);
	}, [user]);

	return (
		<div>
			<p className='text-center mb-5'>
				<NavLink
					to={`${path}/tour-packages`}
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
				<Route exact path={`${path}/tour-packages`}>
					<Table packages={myPackages} />
				</Route>
				<Route path={`${path}/my-packages`}>
					<table packages={myPackages} />
				</Route>
				<Route path={`${path}/all-packages`}>
					<Table packages={packages} />
				</Route>
				<Route path={`${path}/add-packages`}>
					<div className='container py-5'>
						<div className='row'>
							<div className='col-4'>
								<hr
									style={{
										height: '3px',
									}}
								/>
							</div>
							<div className='col-4 text-center'>
								<h3 className='text-shadow'>Create a new Tour Package</h3>
							</div>
							<div className='col-4'>
								<hr
									style={{
										height: '3px',
									}}
								/>
							</div>
						</div>
					</div>
					<CreateEvent />
				</Route>
				<Route path={`${path}/edit-packages/:id`}>
					<div className='container py-5'>
						<div className='row'>
							<div className='col-4'>
								<hr
									style={{
										height: '3px',
									}}
								/>
							</div>
							<div className='col-4 text-center'>
								<h3 className='text-shadow'>Update Package</h3>
							</div>
							<div className='col-4'>
								<hr
									style={{
										height: '3px',
									}}
								/>
							</div>
						</div>
					</div>
					<EditEvent />
				</Route>
			</Switch>
		</div>
	);
};

export default TourPackages;
