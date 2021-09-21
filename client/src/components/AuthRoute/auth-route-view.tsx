import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRouteView: React.FC = (props: any) => {
	const { children, authInfo, ...rest } = props;

	return (
		<Route
			{...rest}
			render={({ location }) =>
				!authInfo || authInfo.token === '' ? children : <Redirect to={'/'} />
			}
		/>
	);
};

export default AuthRouteView;
