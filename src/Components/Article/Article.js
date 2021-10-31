import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ blog }) => {
	const { _id, title, image, shortDes, time } = blog;
	return (
		<div className='col '>
			<div className='card border-0 rounded overflow-hidden shadow'>
				<div className='row'>
					<div
						className='col-lg-5'
						style={{
							minHeight: '300px',
							background: `url("${image}")`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}></div>
					<div className='col-md-7 py-3 px-2'>
						<div className='card-body'>
							<small className='text-muted'>{time}</small>
							<h3 className='card-title'>{title}</h3>
							<p className='card-text'>{shortDes.slice(0, 200)}...</p>
							<Link to={`/blogs/${_id}`} className='text-decoration-none'>
								Read more
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Article;
