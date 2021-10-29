import React from 'react';
import Article from '../Article/Article';

const Articles = () => {
	return (
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
					<h3 className='text-shadow'>Our Articles</h3>
				</div>
				<div className='col-5'>
					<hr
						style={{
							height: '3px',
						}}
					/>
				</div>
			</div>
			<div className='row row-cols-1 row-cols-md-2 g-4 my-3'>
				<Article />
				<Article />
				<Article />
				<Article />
			</div>
			<p className='text-center py-3'>
				<button className='rounded booking-btn w-25'>
					Read More Articles {' >>'}
				</button>
			</p>
		</div>
	);
};

export default Articles;
