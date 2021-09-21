import { get, post } from './api';

export const requestSignUp = async (data: ISignup) => {
	try {
		const response = await post('auth/signup', JSON.stringify(data), false);
		return response;
	} catch (err) {
		console.error(err, '===asdasda');
		console.error(err);
	}
};
export const requestLogin = async (data: ILogin) => {
	try {
		const response = await post('auth/login', JSON.stringify(data), false);

		return response;
	} catch (err) {
		console.error(err);
	}
};
export const requestMyInfo = async () => {
	try {
		const response = await get('auth/me');
		return response;
	} catch (err) {
		console.log(err, '==err');

		console.error(err);
	}
};
