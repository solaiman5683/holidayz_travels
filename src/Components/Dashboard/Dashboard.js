import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import useAuth from '../../hooks/useAuth';
import ManageOrders from './ManageOrders';
import Sidebar from './Sidebar';
import TourPackages from './Tour-Packages';

const Dashboard = () => {
	const { user, logout } = useAuth();
	const { path } = useRouteMatch();

	return (
		<div>
			<header className='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-3 shadow'>
				<div className='container'>
					<a className='navbar-brand col-md-3 col-lg-2 me-0 px-3' href='/'>
						Holidayz Travels
					</a>
					<button
						className='navbar-toggler position-absolute d-md-none collapsed'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#sidebarMenu'
						aria-controls='sidebarMenu'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='navbar-nav'>
						<div className='nav-item text-nowrap'>
							<span className='nav-link px-3 btn' onClick={logout}>
								Logout
							</span>
						</div>
					</div>
				</div>
			</header>
			<div className='container-fluid'>
				<div className='row'>
					<Sidebar path={path} />
					<main className='col-md-6 ms-sm-auto p-5'>
						<Switch>
							<Route exact path={path}>
								<h2>Welcome, {user.displayName}</h2>
							</Route>
							<Route path={path + '/tour-packages'}>
								<TourPackages />
							</Route>
							<Route path={path + '/manage-orders'}>
								<ManageOrders />
							</Route>
						</Switch>
					</main>
					<div className='col-md-2'></div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
