import React from 'react';
import { Modal } from 'react-bootstrap';

const Video = () => {
	const [modalShow, setModalShow] = React.useState(false);
	return (
		<div className='container'>
			<div
				style={{
					backgroundImage:
						'url("https://monnampo.sirv.com/Images/Assignment11/AdobeStock_295328741-scaled-e1574423501852.jpeg")',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					height: '500px',
					minWidth: '80%',
					margin: '100px auto',
					color: 'white',
					borderRadius: '30px',
					overflow: 'hidden',
				}}>
				<div
					className='d-flex align-items-center justify-content-center'
					style={{
						height: '100%',
						width: '100%',
						background:
							'linear-gradient(to top, rgba(0, 64, 126, 0.36) 0%, rgba(139, 136, 91, 0.71) 100%)',
					}}>
					<div className='text-center'>
						<p className='btn-pointer' onClick={() => setModalShow(true)}>
							<img
								src='https://monnampo.sirv.com/Images/Assignment11/play.svg'
								alt=''
							/>
						</p>
						<MyVerticallyCenteredModal
							show={modalShow}
							onHide={() => setModalShow(false)}
						/>
						<h3>Watch our last tour</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

function MyVerticallyCenteredModal(props) {
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<iframe
				height='500'
				className=''
				src='https://www.youtube.com/embed/up68UAfH0d0'
				title='YouTube video player'
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen></iframe>
		</Modal>
	);
}

export default Video;
