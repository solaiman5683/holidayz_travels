import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
function CreateEvent() {
	const { user } = useAuth();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const [events, setEvents] = useState({
		name: '',
		image: '',
		country: '',
		time: '',
		price: '',
		description: '',
		user: user.uid,
	});

	const onSubmit = data => {
		axios
			.post('https://holidayz-travel.herokuapp.com/events', events)
			.then(response => response.data && alert('Events Added Successfully'))
			.catch(error => alert(error.message));
		reset();
	};

	const handleEditorChange = e => {
		setEvents(prev => {
			return {
				...prev,
				description: e.target.getContent(),
			};
		});
	};

	return (
		<div className='d-flex justify-content-center pb-5'>
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						className='form-control mb-3 p-3 fs-5'
						placeholder='Enter Place Name'
						{...register('name', { required: true })}
						onBlur={e => {
							setEvents(prev => {
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
						placeholder='Enter Image Url'
						{...register('image', { required: true })}
						onBlur={e => {
							setEvents(prev => {
								return {
									...prev,
									image: e.target.value,
								};
							});
						}}
					/>
					{errors.exampleRequired && <span>This field is required</span>}
					<input
						className='form-control mb-3 p-3 fs-5'
						placeholder='Enter Country Name'
						{...register('country', { required: true })}
						onBlur={e => {
							setEvents(prev => {
								return {
									...prev,
									country: e.target.value,
								};
							});
						}}
					/>

					<input
						className='form-control mb-3 p-3 fs-5'
						placeholder='Enter Price'
						{...register('charge', { required: true })}
						type='number'
						onBlur={e => {
							setEvents(prev => {
								return {
									...prev,
									price: e.target.value,
								};
							});
						}}
					/>

					<small className='text-muted ps-3'>Select Tour Date</small>
					<input
						className='form-control mb-3 p-3 fs-5'
						type='date'
						{...register('price')}
						onBlur={e => {
							setEvents(prev => {
								return {
									...prev,
									time: e.target.value,
								};
							});
						}}
					/>
					<Editor
						apiKey='qvctqtfhdqwqkjf8r0rd2dbjuk44fzk70v0sosx67u0z5msk'
						initialValue='<p>Write Your Description Here...</p>'
						init={{
							height: 500,
							menubar: false,
							plugins: [
								'advlist autolink lists link image',
								'charmap preview anchor help emoticons',
								'searchreplace visualblocks code save',
								'insertdatetime media table paste wordcount',
							],
							toolbar:
								'undo redo  | formatselect | bold italic underline fontsizeselect | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | forecolor backcolor table | emoticons searchreplace code help',
						}}
						onChange={handleEditorChange}
					/>
					<input
						className='form-control fs-5 bg-gradient p-3 mt-3 btn-primary'
						type='submit'
						value='Submit '
					/>
				</form>
			</div>
		</div>
	);
}

export default CreateEvent;
