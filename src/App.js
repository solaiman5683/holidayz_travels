import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import { Route, Switch } from 'react-router';
import RegistrationForm from './Components/Form/Registration';
import LoginForm from './Components/Form/LoginForm';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home/Home';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';
import Events from './Components/Events/Events';
import Dashboard from './Components/Dashboard/Dashboard';
import EventDetails from './Components/EventDetails/EventDetails';
import EditEvent from './Components/EditEvent/EditEvent';
import CreateBlogs from './Components/CreateBlogs/CreateBlogs';
import Articles from './Components/Articles/Articles';
import BlogDetails from './Components/BlogDetails/BlogDetails';

function App() {
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
						<PrivateRoute exact path='/blogs'>
							<Articles />
						</PrivateRoute>
						<PrivateRoute path='/blogs/:id'>
							<BlogDetails />
						</PrivateRoute>
						<PrivateRoute path='/create-blogs'>
							<CreateBlogs />
						</PrivateRoute>
						<PrivateRoute exact path='/tours'>
							<Events />
						</PrivateRoute>
						<PrivateRoute path='/dashboard'>
							<Dashboard />
						</PrivateRoute>
						<PrivateRoute path='/tours/:id'>
							<EventDetails />
						</PrivateRoute>
						<PrivateRoute path='/edit-packages/:id'>
							<EditEvent />
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
