import { ActionTypes } from '../../actionTypes';

const initialState: IUserReducer = {};

const userReducer = (state = initialState, action: any): IUserReducer => {
	switch (action.type) {
		case ActionTypes.SET_USER_INFO:
			return { ...state, userInfo: action.payload };
		case ActionTypes.SET_USER_LIST:
			return { ...state, userList: action.payload };
		case ActionTypes.SET_CURRENT_USER:
			return { ...state, currentUser: action.payload };
		case ActionTypes.CLEAR_CURRENT_USER:
			return { ...state, currentUser: undefined };
		default:
			return state;
	}
};

export default userReducer;
