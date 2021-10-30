import React from 'react';

const Quotes = () => {
	return (
		<div
			style={{
				height: '400px',
				background:
					'url("https://monnampo.sirv.com/Images/Assignment11/Screenshot%202021-10-29%20at%2019-34-29%20%25C2%25A9%2520GP%2BB%2520-%2520Site%2520Tour%2520Eiffel%2520-%2520Vue%2520ae%25CC%2581rienne%20jpg%20(WEBP%20Image%2C%202560%5B...%5D(1).png")',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				margin: '20px 0',
			}}>
			<div
				style={{
					height: '100%',
					background:
						'rgba(0, 0, 0, 0) linear-gradient(to top, rgba(0, 64, 126, 0.61) 0%, rgb(248, 249, 250) 100%)',
				}}
				className='d-flex justify-content-center align-items-center'>
				<figure>
					<blockquote class='blockquote'>
						<h1 className='text-uppercase fw-bold text-shadow mt-5'>
							A journey of a thousand miles begins with a single step
						</h1>
					</blockquote>
					<figcaption
						class='blockquote-footer fs-4'
						style={{ textAlign: 'right' }}>
						<cite title='Source Title '>Lao Tzu</cite>
					</figcaption>
				</figure>
			</div>
		</div>
	);
};

export default Quotes;
