import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Article from '../Article/Article';
import Break from '../Dashboard/Break';

const Articles = () => {
	const [blogs, setBlogs] = useState();

	useEffect(() => {
		axios
			.get('https://holidayz-travel.herokuapp.com/blogs')
			.then(response => setBlogs(response.data));
	}, []);

	console.log(blogs);

	return (
		<div className='container py-5'>
			<Navbar bg='light' expand='lg' className='py-5 fs-4'>
				<Nav className='mx-auto'>
					<NavLink
						className='nav-link'
						activeClassName=' active shadow rounded-pill px-4'
						aria-current='page'
						exact
						to='/'>
						Back to Home Page
					</NavLink>
				</Nav>
			</Navbar>
			<Break text='Our Articles' />
			<div className='row row-cols-1 row-cols-md-2 g-4 my-3'>
				{blogs?.map(blog => (
					<Article key={blog._id} blog={blog} />
				))}
			</div>
		</div>
	);
};

export default Articles;
