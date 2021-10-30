import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import Articles from '../Articles/Articles';

const Blogs = () => {
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
						Blogs
					</NavLink>
					<NavLink
						className='nav-link'
						activeClassName=' active shadow rounded-pill px-4'
						aria-current='page'
						to={`${path}/new-blogs`}>
						Create a new blog
					</NavLink>
				</Nav>
			</Navbar>
			<Switch>
				<Route exact path={path}>
					<Articles />
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
								<h3 className='text-shadow'>Create a new Article</h3>
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
				</Route>
			</Switch>
		</div>
	);
};

export default Blogs;
