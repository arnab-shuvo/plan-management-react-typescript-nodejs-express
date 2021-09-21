import { get, patch, post, deleteRequest } from './api';

export const requestUserList = async () => {
	try {
		const response = await get('user');
		return response;
	} catch (err) {
		console.error(err);
	}
};
export const requestCheckEmail = async (email: string) => {
	try {
		const response = await get(`user/email-check?email=${email}`, null, false);
		return response;
	} catch (err) {
		console.error(err);
	}
};
export const requestAddUser = async (data: ICreateUser) => {
	try {
		const response = await post(`user`, JSON.stringify(data));
		return response;
	} catch (err) {
		console.error(err);
	}
};
export const requestUpdateUser = async (data: ICreateUser, id: string) => {
	try {
		const response = await patch(`user/${id}`, data);
		return response;
	} catch (err) {
		console.error(err);
	}
};
export const requestDeleteUser = async (id: string) => {
	try {
		const response = await deleteRequest(`user/${id}`);
		return response;
	} catch (err) {
		console.error(err);
	}
};
