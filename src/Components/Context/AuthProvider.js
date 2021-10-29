import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
	const allContexts = useFirebase();
	// const { loading } = useFirebase();
	// if(loading) return <h1>Loading ...</h1>
	return (
		<AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
