import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Loader from './components/Loader';
import Home from 'pages/Home';
import PrivateRoute from 'components/PrivateRoute';
import PrivateLayout from 'components/Layout/PrivateLayout';
import AuthRoute from 'components/AuthRoute';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import Plans from 'pages/Plans';
import User from 'pages/User';

const App: React.FC = () => {
	return (
		<Router>
			<Loader />

			<Switch>
				<AuthRoute exact path='/login'>
					<Login />
				</AuthRoute>
				<AuthRoute exact path='/signup'>
					<Signup />
				</AuthRoute>
				<Route exact path='/' render={() => <Redirect to='/dashboard' />} />
				<PrivateRoute exact path='/dashboard'>
					<PrivateLayout>
						<Home />
					</PrivateLayout>
				</PrivateRoute>

				<PrivateRoute exact userToExclude={['manager']} path='/plans'>
					<PrivateLayout>
						<Plans />
					</PrivateLayout>
				</PrivateRoute>
				<PrivateRoute userToExclude={['user']} exact path='/users'>
					<PrivateLayout>
						<User />
					</PrivateLayout>
				</PrivateRoute>
				<PrivateLayout>
					<Route path='*' render={() => <>222</>} />
				</PrivateLayout>
			</Switch>
		</Router>
	);
};

export default App;
