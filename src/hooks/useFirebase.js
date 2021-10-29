import {
	FacebookAuthProvider,
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
	signOut,
} from '@firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuth from '../Components/Firebase/firebase-initialize-app';
initializeAuth();
const auth = getAuth();

const useFirebase = () => {
	// States
	const [user, setUser] = useState({});
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);

	// External Login Provider.
	const googleProvider = new GoogleAuthProvider();
	const facebookProvider = new FacebookAuthProvider();

	const handleGoogleSignIn = () => signInWithPopup(auth, googleProvider);
	const handleFacebookSignIn = () => signInWithPopup(auth, facebookProvider);

	const handleCreateUser = (name, email, password, history) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				setError('');
				// Signed in
				alert(
					'Successfully Signed up! Now you can login with your email and password.'
				);
				// ...
				setUserName(name);
				history.push('/login');
			})
			.catch(() => {
				setError('reg');
			});
	};

	const setUserName = name => {
		updateProfile(auth.currentUser, {
			displayName: name,
		}).then(() => {});
	};

	const handleLogin = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then(result => {
				// Signed in
				const user = result.user;
				setUser(user);
				setError('');
				setLoading(false);
				// ...
			})
			.catch(error => {
				setError('login');
				setLoading(false);
				console.log(error.massage);
			})
			.finally(() => setLoading(false));
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const logout = () => {
		signOut(auth).then(() => {
			setUser({});
			setLoading(false);
		});
	};
	return {
		user,
		error,
		loading,
		setUser,
		setError,
		handleGoogleSignIn,
		handleFacebookSignIn,
		handleCreateUser,
		handleLogin,
		logout,
	};
};

export default useFirebase;
