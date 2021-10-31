import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
	const { user, logout } = useAuth();
	return (
		<>
			<Navbar bg='light' expand='lg' className='pt-4 sticky-top'>
				<Container>
					<NavLink
						exact
						className='nav-link active position-relative'
						style={{ width: '200px' }}
						aria-current='page'
						to='/'>
						<img
							src='https://monnampo.sirv.com/Images/Assignment11/holidays-logo.svg'
							alt=''
							width='100px'
							className='logo'
						/>
					</NavLink>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<NavLink
								exact
								className='nav-link'
								activeClassName=' active'
								aria-current='page'
								to='/'>
								Home
							</NavLink>
							<NavLink
								activeClassName=' active'
								className='nav-link'
								aria-current='page'
								to='/tours'>
								Tour Packages
							</NavLink>
							<NavLink
								activeClassName=' active'
								className='nav-link'
								aria-current='page'
								to='/blogs'>
								Blogs
							</NavLink>
						</Nav>
						<Nav className='ms-auto'>
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
									<Link
										to='/dashboard'
										className='dropdown-item text-center mb-3 rounded-pill btn-pointer'>
										Dashboard
									</Link>
									<p
										className='dropdown-item text-center bg-danger text-light rounded-pill btn-pointer'
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
