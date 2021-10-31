import React from 'react';

const Header = () => {
	return (
		<div
			className='position-relative'
			style={{
				zIndex: '-1',
			}}>
			<div>
				<img
					src='https://monnampo.sirv.com/Images/Assignment11/landscape3.svg'
					alt=''
					width='100%'
				/>
			</div>
			<div
				className=' position-absolute w-100'
				style={{
					top: '40%',
				}}>
				<h1 className='mb-5 text-uppercase text-center fw-bolder text-shadow'>
					Get ready for real time adventure
				</h1>
			</div>
		</div>
	);
};

export default Header;
