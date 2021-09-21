import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props: any) => {
	const { children, authInfo, userInfo, userToExclude, ...rest } = props;

	return (
		<Route
			{...rest}
			render={({ location }) =>
				authInfo && authInfo.token !== '' ? (
					userInfo.userInfo?.userRole.includes(userToExclude) ? (
						<Redirect to={'/'} />
					) : (
						children
					)
				) : (
					<Redirect to={'/login'} />
				)
			}
		/>
	);
};

export default PrivateRoute;
