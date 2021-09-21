import { ActionTypes } from '../../actionTypes';

export const signUpReset = () => ({
	type: ActionTypes.SIGN_UP_RESET,
});
export const toggleModal = (data: boolean) => ({
	type: ActionTypes.MODAL_TOGGLE,
	payload: data,
});
export const loginUtility = (message: ILoginResolver) => ({
	type: ActionTypes.LOGIN_RESOLVER,
	payload: message,
});
export const loaderToggle = (data: boolean) => ({
	type: ActionTypes.LOADER_TOGGLE,
	payload: data,
});
