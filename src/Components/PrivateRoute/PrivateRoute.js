import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
	const { user, loading } = useAuth();
	if (loading)
		return (
			<div className='d-flex align-items-center justify-content-center min-vh-100'>
				<div
					class='spinner-border text-success'
					role='status'
					style={{ height: '5em', width: '5em' }}>
					<span class='visually-hidden'>Loading...</span>
				</div>
			</div>
		);
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.displayName ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
