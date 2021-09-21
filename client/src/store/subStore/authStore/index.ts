import { ActionTypes } from '../../actionTypes';

const initialState: IAuthReducer = {};

const authReducer = (state = initialState, action: any): IAuthReducer => {
	switch (action.type) {
		case ActionTypes.SET_AUTH_INFO:
			return { ...state, userInfo: action.payload };
		case ActionTypes.LOGOUT:
			return initialState;
		default:
			return state;
	}
};

export default authReducer;
