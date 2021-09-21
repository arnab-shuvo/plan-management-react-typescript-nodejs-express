import { requestMyInfo } from 'lib/network/auth';
import {
	requestUserList,
	requestCheckEmail,
	requestAddUser,
	requestUpdateUser,
	requestDeleteUser,
} from 'lib/network/user';
import { ActionTypes } from '../../actionTypes';
import { loaderToggle, toggleModal } from '../utilityStore/action';

const setUserInfo = (data: IUserInfo) => ({
	type: ActionTypes.SET_USER_INFO,
	payload: data,
});
const setUserList = (data: IUserInfo) => ({
	type: ActionTypes.SET_USER_LIST,
	payload: data,
});

export const setCurrentUser = (data: IUserList) => ({
	type: ActionTypes.SET_CURRENT_USER,
	payload: data,
});
export const clearCurrentUser = () => ({
	type: ActionTypes.CLEAR_CURRENT_USER,
});

export const getMyInfo = () => {
	return async (dispatch: any) => {
		dispatch(loaderToggle(true));
		const myInfo: IUserInfo = await requestMyInfo();
		dispatch(setUserInfo(myInfo));
		dispatch(loaderToggle(false));
	};
};
export const getUserList = () => {
	return async (dispatch: any) => {
		dispatch(loaderToggle(true));
		const userList: IUserInfo = await requestUserList();
		dispatch(setUserList(userList));
		dispatch(loaderToggle(false));
	};
};

export const setFoundUser = (data: boolean) => ({
	type: ActionTypes.SET_FOUND_USER,
	payload: data,
});
export const checkEmail = (email: string) => {
	return async (dispatch: any) => {
		const isFound: any = await requestCheckEmail(email);
		dispatch(setFoundUser(isFound.found));
	};
};

export const createOrUpdateUser = (data: ICreateUser, id?: string) => {
	return async (dispatch: any) => {
		dispatch(loaderToggle(true));
		if (id) {
			await requestUpdateUser(data, id);
		} else {
			await requestAddUser(data);
		}
		dispatch(getUserList());
		dispatch(toggleModal(false));
		dispatch(loaderToggle(false));
	};
};

export const deleteUserAction = (id: string) => {
	return async (dispatch: any) => {
		dispatch(loaderToggle(true));
		await requestDeleteUser(id);

		dispatch(getUserList());
		dispatch(loaderToggle(false));
	};
};
