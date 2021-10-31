import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Article from '../Article/Article';
import Break from '../Dashboard/Break';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const Articles = () => {
	const [blogs, setBlogs] = useState();

	useEffect(() => {
		axios
			.get('https://holidayz-travel.herokuapp.com/blogs')
			.then(response => setBlogs(response.data));
	}, []);

	console.log(blogs);

	return (
		<>
			<Navigation />
			<div className='container py-5 mt-5'>
				<Break text='Our Articles' />
				<div className='row row-cols-1 row-cols-md-2 g-4 my-3'>
					{blogs?.map(blog => (
						<Article key={blog._id} blog={blog} />
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Articles;
