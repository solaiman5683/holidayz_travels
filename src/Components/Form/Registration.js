import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import registrationImage from './login.svg';
import errorImage from './warning.svg';
import useAuth from '../../hooks/useAuth';

const RegistrationForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();
	const {
		user,
		error,
		handleGoogleSignIn,
		handleCreateUser,
		setUser,
		setError,
	} = useAuth();

	const location = useLocation();
	const redirectURI = location.state?.from || '/';

	const handleRegistration = e => {
		e.preventDefault();
		handleCreateUser(name, email, password, history);
		e.target.reset();
	};

	const handleGoogleLogin = () => {
		handleGoogleSignIn()
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
	if (user.displayName) {
		history.push('/');
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
				<div style={{ width: '40%', padding: '20px' }}>
					<img
						src={error === 'reg' ? errorImage : registrationImage}
						alt='Registration'
						style={{ width: '100%' }}
					/>
				</div>
				<Box
					style={{}}
					component='form'
					sx={{
						'& .MuiTextField-root': { mb: 2 },
					}}
					onSubmit={handleRegistration}
					autoComplete='off'>
					<Typography
						color='primary'
						variant='h4'
						sx={{ marginBottom: '30px', color: '#3f3d56' }}>
						Create a new Account
					</Typography>
					<div>
						<TextField
							onBlur={e => setName(e.target.value)}
							required
							id='outlined-required'
							label='First Name'
						/>
						<TextField
							onBlur={e => setName(`${name} ${e.target.value}`)}
							id='outlined-required'
							label='Last Name'
							sx={{ marginLeft: '10px' }}
						/>
					</div>
					<div>
						<TextField
							required
							onBlur={e => setEmail(e.target.value)}
							fullWidth
							id='outlined-required'
							label='Email'
						/>
						<TextField
							required
							fullWidth
							onBlur={e => setPassword(e.target.value)}
							id='outlined-password-input'
							label='Password'
							type='password'
							autoComplete='current-password'
						/>
					</div>
					<Button
						type='submit'
						variant='contained'
						sx={{ padding: '10px', fontSize: '1.2em' }}
						fullWidth>
						Register
					</Button>
					<Link
						to='/login'
						style={{
							display: 'block',
							textDecoration: 'none',
							padding: '20px',
							color: '#1565c0',
							textAlign: 'center',
						}}>
						<i
							className='fad fa-clipboard-check'
							style={{ padding: '5px' }}></i>
						Already Have an Account?
					</Link>
					<Typography
						color='red'
						style={{
							textAlign: 'center',
						}}>
						{error === 'reg' &&
							'Sorry, something went wrong. Please try again !'}
					</Typography>
					<div>
						<Button variant='text' onClick={handleGoogleLogin}>
							<i className='fab fa-google' style={{ padding: '5px' }}></i>{' '}
							Signup with Google
						</Button>
					</div>
				</Box>
			</div>
		</div>
	);
};

export default RegistrationForm;
