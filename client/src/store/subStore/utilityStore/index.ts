import { ActionTypes } from '../../actionTypes';

const initialState: IUtilityReducer = {
	openModal: false,
	loader: false,
};

const utilityReducer = (state = initialState, action: any): IUtilityReducer => {
	switch (action.type) {
		case ActionTypes.SIGN_UP_RESOLVER:
			return { ...state, signup: action.payload };
		case ActionTypes.SIGN_UP_RESET:
			return { ...state, signup: undefined };
		case ActionTypes.LOGIN_RESOLVER:
			return { ...state, login: action.payload };
		case ActionTypes.MODAL_TOGGLE:
			return { ...state, openModal: action.payload };
		case ActionTypes.LOADER_TOGGLE:
			return { ...state, loader: action.payload };
		case ActionTypes.SET_FOUND_USER:
			return { ...state, isEmailFound: action.payload };
		default:
			return state;
	}
};

export default utilityReducer;
