import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
	const { user, logout } = useAuth();
	return (
		<>
			<Navbar bg='light' expand='lg' className='pt-4'>
				<Container>
					<NavLink
						className='nav-link active position-relative'
						aria-current='page'
						to='/'>
						<img
							src='https://monnampo.sirv.com/Images/Assignment11/holidays-logo.svg'
							alt=''
							width='100'
							style={{
								transform: 'scale(1.5)',
								position: 'absolute',
								top: '15%',
							}}
						/>
					</NavLink>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<NavLink className='nav-link active' aria-current='page' to='/'>
								Home
							</NavLink>
							{!user.email && (
								<>
									<li className='nav-item'>
										<NavLink className='nav-link' to='/login'>
											Login
										</NavLink>
									</li>
									<li className='nav-item'>
										<NavLink className='nav-link' to='/registration'>
											Registration
										</NavLink>
									</li>
								</>
							)}
							{user.email && (
								<NavDropdown
									title={'Hello, ' + user.displayName}
									id='basic-nav-dropdown'>
									{user.photoURL && (
										<p className='text-center'>
											<img
												src={user.photoURL}
												className='rounded-circle'
												alt=''
											/>
										</p>
									)}
									<p
										className='dropdown-item text-center bg-danger text-light rounded-pill logout-btn'
										onClick={logout}>
										Logout
									</p>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Navigation;
