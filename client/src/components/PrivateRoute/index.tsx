import PrivateRouteView from './private-route-view';
import { useSelector } from 'react-redux';

const PrivateRoute = (props: any) => {
	const { userInfo } = useSelector((state: any) => state.authReducer);
	const userReducer = useSelector((state: any) => state.userReducer);

	return <PrivateRouteView userInfo={userReducer} authInfo={userInfo} {...props} />;
};

export default PrivateRoute;
