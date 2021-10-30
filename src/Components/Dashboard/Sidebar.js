import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ path }) => {
	return (
		<nav
			id='sidebarMenu'
			className='col-md-2 col-lg-4 bg-light d-md-block sidebar collapse'>
			<div className='row'>
				<div className='col-md-6'></div>
				<div className='col-md-6'>
					<div className='position-sticky pt-3'>
						<ul className='nav flex-column'>
							<li className='nav-item'>
								<NavLink
									to='/dashboard'
									activeClassName='active'
									className='nav-link'
									aria-current='page'
									href='#'>
									Dashboard
								</NavLink>
								<NavLink
									to={`${path}/tour-packages`}
									activeClassName='active'
									className='nav-link'
									aria-current='page'>
									Tour Packages
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Sidebar;
