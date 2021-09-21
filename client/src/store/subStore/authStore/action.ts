import { requestSignUp, requestLogin } from 'lib/network/auth';
import { ActionTypes } from '../../actionTypes';
import { loaderToggle, loginUtility } from '../utilityStore/action';

const signUpActionzResolver = (data: ISignUpResolver) => ({
	type: ActionTypes.SIGN_UP_RESOLVER,
	payload: data,
});

export const signUpAction = (data: ISignup) => {
	return async (dispatch: any) => {
		try {
			dispatch(loaderToggle(true));
			const signupData = await requestSignUp(data);
			dispatch(
				signUpActionzResolver({
					success: signupData.id ? true : false,
					message: signupData.message,
				}),
			);
			dispatch(loaderToggle(false));
		} catch (error) {
			console.log(error, '==sadasd');
		}
	};
};

const loginResolver = (data: IAuthReducer) => ({
	type: ActionTypes.SET_AUTH_INFO,
	payload: data,
});
const logout = () => ({
	type: ActionTypes.LOGOUT,
});

export const logoutAction = () => {
	return async (dispatch: any) => {
		dispatch(loaderToggle(true));
		dispatch(logout());
		dispatch(loaderToggle(false));
	};
};

export const loginAction = (data: ILogin) => {
	return async (dispatch: any) => {
		dispatch(loaderToggle(true));
		const loginData = await requestLogin(data);

		if (loginData.userInfo) {
			dispatch(loginResolver(loginData.userInfo));
		} else {
			dispatch(loginUtility({ message: loginData.message }));
		}
		dispatch(loaderToggle(false));
	};
};
