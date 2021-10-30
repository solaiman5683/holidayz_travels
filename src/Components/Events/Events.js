import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useRouteMatch, NavLink, Switch, Route } from 'react-router-dom';
import CreateEvent from '../CreateEvent/CreateEvent';
import LoadEvents from '../LoadEvents/LoadEvents';

const Events = () => {
	const { path } = useRouteMatch();
	const [events, setEvents] = useState();

	useEffect(() => {
		axios
			.get('http://localhost:5000/events')
			.then(response => setEvents(response.data));
	});
	return (
		<div>
			<Navbar bg='light' expand='lg' className='py-5 fs-4'>
				<Nav className='mx-auto'>
					<NavLink
						className='nav-link'
						activeClassName=' active shadow rounded-pill px-4'
						aria-current='page'
						exact
						to='/'>
						Home
					</NavLink>
					<NavLink
						className='nav-link'
						activeClassName=' active shadow rounded-pill px-4'
						aria-current='page'
						exact
						to={path}>
						Tour Packages
					</NavLink>
					<NavLink
						className='nav-link'
						activeClassName=' active shadow rounded-pill px-4'
						aria-current='page'
						to={`${path}/new-package`}>
						Create a new Package
					</NavLink>
				</Nav>
			</Navbar>
			<Switch>
				<Route exact path={path}>
					<div className='mb-5'>
						<div className='container py-5'>
							<div className='row'>
								<div className='col-5'>
									<hr
										style={{
											height: '3px',
										}}
									/>
								</div>
								<div className='col-2 text-center'>
									<h3 className='text-shadow'>All Packages</h3>
								</div>
								<div className='col-5'>
									<hr
										style={{
											height: '3px',
										}}
									/>
								</div>
							</div>
						</div>
						<div className='container'>
							<LoadEvents events={events} />
						</div>
					</div>
				</Route>
				<Route path={`${path}/new-package`}>
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
			</Switch>
		</div>
	);
};

export default Events;
