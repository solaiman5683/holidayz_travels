import React from 'react';

const Article = () => {
	return (
		<div className='col '>
			<div className='card border-0 rounded overflow-hidden shadow'>
				<div className='row'>
					<div
						className='col-md-5'
						style={{
							minHeight: '300px',
							background:
								'url("https://cdn.getyourguide.com/tf/assets/static/about/couple-rowing-kayak-lg.jpg")',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}></div>
					<div className='col-md-7 py-3 px-2'>
						<div className='card-body'>
							<small className='text-muted'>10 june 2020</small>
							<h3 className='card-title'>Card title</h3>
							<p className='card-text'>
								This is a longer card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Article;
