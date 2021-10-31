import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import Break from '../Dashboard/Break';
import Navigation from '../Navigation/Navigation';
function CreateBlogs() {
	const { user } = useAuth();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const [blogs, setBlogs] = useState({
		title: '',
		image: '',
		shortDes: '',
		time: new Date().toLocaleDateString('en-Us'),
		description: '',
		author: user.displayName,
	});

	const onSubmit = data => {
		axios
			.post('https://holidayz-travel.herokuapp.com/blogs', blogs)
			.then(response => response.data && alert('Blog Added Successfully'))
			.catch(error => alert(error.message));
		reset();
	};

	return (
		<>
			<Navigation />
			<div className='d-flex justify-content-center py-5'>
				<div className='pt-5'>
					<Break text='Create new Article' />

					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							className='form-control mb-3 p-3 fs-5'
							placeholder='Enter Title'
							{...register('name', { required: true })}
							onBlur={e => {
								setBlogs(prev => {
									return {
										...prev,
										title: e.target.value,
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
								setBlogs(prev => {
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
							placeholder='Enter Short Description'
							{...register('country', { required: true })}
							onBlur={e => {
								setBlogs(prev => {
									return {
										...prev,
										shortDes: e.target.value,
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
							onChange={e => {
								setBlogs(prev => {
									return {
										...prev,
										description: e.target.getContent(),
									};
								});
							}}
						/>
						<input
							className='form-control fs-5 bg-gradient p-3 mt-3 btn-primary'
							type='submit'
							value='Submit '
						/>
					</form>
				</div>
			</div>
		</>
	);
}

export default CreateBlogs;
