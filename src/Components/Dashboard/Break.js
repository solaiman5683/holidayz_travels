import React from 'react';

const Break = ({ text }) => {
	return (
		<div className='pb-5'>
			<div className='row'>
				<div className='col-4'>
					<hr
						style={{
							height: '3px',
						}}
					/>
				</div>
				<div className='col-4 text-center'>
					<h3 className='text-shadow'>{text}</h3>
				</div>
				<div className='col-4'>
					<hr
						style={{
							height: '3px',
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Break;
