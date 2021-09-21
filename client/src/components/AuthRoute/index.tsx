import React from 'react';
import AuthRouteView from './auth-route-view';
import { useSelector } from 'react-redux';

const AuthRoute = (props: any) => {
	const { userInfo } = useSelector((state: any) => state.authReducer);

	return <AuthRouteView authInfo={userInfo} {...props} />;
};

export default AuthRoute;
