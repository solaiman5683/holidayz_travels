import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useRouteMatch, NavLink, Switch, Route } from 'react-router-dom';
import CreateEvent from '../CreateEvent/CreateEvent';
import EventCard from '../Event-Card/Event-card';

const Events = () => {
	const { path } = useRouteMatch();
	console.log(path);
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
						Events
					</NavLink>
					<NavLink
						className='nav-link'
						activeClassName=' active shadow rounded-pill px-4'
						aria-current='page'
						to={`${path}/new-blogs`}>
						Create a new Event
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
									<h3 className='text-shadow'>All Events</h3>
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
							<div className='row row-cols-1 row-cols-md-3 g-4'>
								<EventCard />
								<EventCard />
								<EventCard />
								<EventCard />
								<EventCard />
								<EventCard />
							</div>
						</div>
					</div>
				</Route>
				<Route path={`${path}/new-blogs`}>
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
								<h3 className='text-shadow'>Create a new Event</h3>
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
