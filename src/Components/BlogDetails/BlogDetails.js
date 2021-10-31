import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const BlogDetails = () => {
	const { id } = useParams();
	const [blog, setBlog] = useState();
	useEffect(() => {
		axios(`https://holidayz-travel.herokuapp.com/blogs/${id}`).then(res =>
			setBlog(res.data)
		);
	}, [id]);

	function createMarkup() {
		return { __html: blog?.description };
	}

	return (
		<>
			<Navigation />
			<div className='container mt-5 p-5'>
				<div
					className='blog-bg'
					style={{
						height: '500px',
						background: `url('${blog?.image}') no-repeat`,
					}}></div>
				<h1 className='text-capitalize py-4'>{blog?.title}</h1>
				<hr />
				<small>Author : {blog?.author}</small>
				<div className='py-4' dangerouslySetInnerHTML={createMarkup()} />
			</div>
			<Footer />
		</>
	);
};

export default BlogDetails;
