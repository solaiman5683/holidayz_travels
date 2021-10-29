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

	// const location = useLocation();

	const {
		user,
		error,
		handleGoogleSignIn,
		handleFacebookSignIn,
		handleLogin,
		setError,
		setUser,
	} = useAuth();

	const location = useLocation();
	const history = useHistory();
	const redirectURI = location.state?.from || '/';

	const handleLoginFunc = e => {
		e.preventDefault();
		handleLogin(email, password);
		e.target.reset();
	};

	const handleFacebookLogin = () => {
		handleFacebookSignIn()
			.then(res => {
				const user = res.user;
				setError('');
				setUser(user);
				history.push(redirectURI);
			})
			.catch(err => {
				setError('login');
			});
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
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-evenly',
					boxShadow: '0 0 5px #d2d0d0',
					padding: '80px 0',
					borderRadius: '10px',
					boxSizing: 'border-box',
					color: '#6C63FF !important',
				}}>
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
					<Link
						to='/registration'
						style={{
							display: 'block',
							textDecoration: 'none',
							margin: '20px',
							color: '#1565c0',
							textAlign: 'center',
						}}>
						<i className='fad fa-sign-in-alt' style={{ padding: '5px' }}></i>
						Create New Account
					</Link>
					<Typography color='red' sx={{ textAlign: 'center' }}>
						{error === 'login' &&
							'Sorry, something went wrong. Please try again !'}
					</Typography>
					<div>
						<Button variant='text' onClick={handleGoogleLogin}>
							<i className='fab fa-google' style={{ padding: '5px' }}></i> Login
							with Google
						</Button>
						<Button variant='text' onClick={handleFacebookLogin}>
							<i className='fab fa-facebook-f' style={{ padding: '5px' }}></i>{' '}
							Login with Facebook
						</Button>
					</div>
				</Box>
				<div style={{ width: '40%', padding: '20px' }}>
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
