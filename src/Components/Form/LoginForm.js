import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import loginImage from './secure.svg';
import errorImage from './error.svg';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { user, error, handleGoogleSignIn, handleLogin, setError, setUser } =
		useAuth();

	const location = useLocation();
	const history = useHistory();
	const redirectURI = location.state?.from || '/';

	const handleLoginFunc = e => {
		e.preventDefault();
		handleLogin(email, password);
		e.target.reset();
	};

	const handleGoogleLogin = () => {
		handleGoogleSignIn()
			.then(res => {
				const user = res.user;
				setError('');
				setUser(user);
				history.replace(redirectURI);
			})
			.catch(err => {
				setError('login');
			});
	};
	if (user.displayName) {
		history.replace(redirectURI);
	}
	return (
		<div
			style={{
				minHeight: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<div
				className='row m-5 rounded shadow'
				style={{
					padding: '80px 0',
					color: '#6C63FF !important',
				}}>
				<div className='col-md-6 p-5'>
					<Box
						component='form'
						sx={{
							'& .MuiTextField-root': { mb: 2 },
						}}
						onSubmit={handleLoginFunc}
						autoComplete='off'>
						<Typography
							color='primary'
							variant='h4'
							sx={{ marginBottom: '30px', color: '#3f3d56' }}>
							Login Your Account
						</Typography>
						<div>
							<TextField
								required
								fullWidth
								id='outlined-required'
								label='Email'
								onBlur={e => setEmail(e.target.value)}
							/>
							<TextField
								required
								fullWidth
								id='outlined-password-input'
								label='Password'
								type='password'
								autoComplete='current-password'
								onBlur={e => setPassword(e.target.value)}
							/>
						</div>
						<Button
							type='submit'
							variant='contained'
							sx={{ padding: '10px', fontSize: '1.2em' }}
							fullWidth>
							Login
						</Button>

						<Typography color='red' sx={{ textAlign: 'center' }}>
							{error === 'login' &&
								'Sorry, something went wrong. Please try again !'}
						</Typography>
						<div className='row'>
							<div className='col-lg-6'>
								<Link
									to='/registration'
									style={{
										display: 'block',
										textDecoration: 'none',
										margin: '20px',
										color: '#1565c0',
										textAlign: 'center',
									}}>
									<i
										className='fad fa-sign-in-alt'
										style={{ padding: '5px' }}></i>
									Create New Account
								</Link>
							</div>
							<div className='col-lg-6 text-center'>
								<p
									variant='text'
									onClick={handleGoogleLogin}
									style={{
										display: 'block',
										textDecoration: 'none',
										margin: '20px',
										color: '#1565c0',
										textAlign: 'center',
										padding: '0',
										cursor: 'pointer',
									}}>
									<i className='fab fa-google'></i> Login with Google
								</p>
							</div>
						</div>
					</Box>
				</div>
				<div className='col-md-6 p-4'>
					<img
						src={error === 'login' ? errorImage : loginImage}
						alt='Registration'
						style={{ width: '100%' }}
					/>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
