import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import { Route, Switch } from 'react-router';
import RegistrationForm from './Components/Form/Registration';
import LoginForm from './Components/Form/LoginForm';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home/Home';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';
import Blogs from './Components/Blogs/Blogs';
import Events from './Components/Events/Events';
import Dashboard from './Components/Dashboard/Dashboard';
// import useFirebase from './hooks/useFirebase';

function App() {
	// const { user } = useFirebase();
	return (
		<div className='App'>
			<AuthProvider>
				<Router>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/home'>
							<Home />
						</Route>
						<PrivateRoute path='/blogs'>
							<Blogs />
						</PrivateRoute>
						<PrivateRoute path='/tours'>
							<Events />
						</PrivateRoute>
						<PrivateRoute path='/dashboard'>
							<Dashboard />
						</PrivateRoute>
						<Route path='/registration'>
							<RegistrationForm />
						</Route>
						<Route path='/login'>
							<LoginForm />
						</Route>
						<Route>
							<NotFound />
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
