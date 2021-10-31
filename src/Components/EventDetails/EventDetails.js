import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const EventDetails = () => {
	const { id } = useParams();
	const [events, setEvents] = useState();
	const [modalShow, setModalShow] = React.useState(false);
	useEffect(() => {
		axios(`https://holidayz-travel.herokuapp.com/events/${id}`).then(res =>
			setEvents(res.data)
		);
	}, [id]);

	function createMarkup() {
		return { __html: events?.description };
	}

	return (
		<>
			<Navigation />
			<div className='container p-5'>
				<div className='my-5'>
					<div
						className='blog-bg'
						style={{
							height: '500px',
							background: `url('${events?.image}') no-repeat`,
						}}></div>

					<div className='row py-5'>
						<div className='col-md-6'>
							<h1 className='text-capitalize'>
								{events?.name}{' '}
								<small className='fs-5'>-{events?.country}</small>
							</h1>
						</div>
						<div
							className='col-md-6 justify-content-end'
							style={{ textAlign: 'right' }}>
							<button className='btn pe-3 fs-4'>
								Price Per Person : ${events?.price}
							</button>
							<button
								className='btn booking-btn text-light'
								onClick={() => setModalShow(true)}>
								<i className='fad fa-hand-point-right fs-5'></i> Book Now
							</button>

							{events?._id && (
								<MyVerticallyCenteredModal
									show={modalShow}
									onHide={() => setModalShow(false)}
									packages={events._id}
								/>
							)}
						</div>
					</div>
					<hr />
					<div className='p-4' dangerouslySetInnerHTML={createMarkup()} />
				</div>
			</div>
			<Footer />
		</>
	);
};

function MyVerticallyCenteredModal(props) {
	const { user } = useAuth();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const [bookingsData, setBookingsData] = useState({
		name: user.displayName,
		address: '',
		quantity: '1',
		packages: props.packages,
		user: user.uid,
		status: 'pending',
	});

	const onSubmit = data => {
		console.log(JSON.stringify(bookingsData));
		console.log(bookingsData);
		axios
			.post('https://holidayz-travel.herokuapp.com/bookings', bookingsData)
			.then(
				response =>
					response.data &&
					alert(
						'Tour Package Booking Successfully Done, Please Wait we will contact you soon'
					)
			)
			.catch(error => alert(error.message));
		reset();
	};

	return (
		<Modal
			{...props}
			className='p-5'
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<Modal.Header closeButton className='p-4'>
				<Modal.Title id='contained-modal-title-vcenter'>
					Enter your Details here
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='px-5 pb-5'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						className='form-control mb-3 p-3 fs-5'
						placeholder='Enter Your Name'
						defaultValue={user.displayName}
						{...register('name', { required: true })}
						onBlur={e => {
							setBookingsData(prev => {
								return {
									...prev,
									name: e.target.value,
								};
							});
						}}
					/>
					{errors.exampleRequired && <span>This field is required</span>}
					<input
						className='form-control mb-3 p-3 fs-5'
						placeholder='Enter Your address'
						{...register('address', { required: true })}
						onBlur={e => {
							setBookingsData(prev => {
								return {
									...prev,
									address: e.target.value,
								};
							});
						}}
					/>
					{errors.exampleRequired && <span>This field is required</span>}

					<small className='text-muted ps-3'>
						How many people want to join ?
					</small>
					<input
						type='number'
						defaultValue={1}
						{...register('quantity', { required: true })}
						onChange={e => {
							setBookingsData(prev => {
								return {
									...prev,
									quantity: e.target.value,
								};
							});
						}}
						className='form-control mb-3 p-3 fs-5 '
					/>

					<input
						className='form-control fs-5 bg-gradient p-3 mt-3 btn-primary'
						type='submit'
						value='Submit '
					/>
				</form>
			</Modal.Body>
		</Modal>
	);
}

export default EventDetails;
