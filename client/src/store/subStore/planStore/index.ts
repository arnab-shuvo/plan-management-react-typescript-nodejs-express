import { ActionTypes } from '../../actionTypes';

const initialState: IPlanReducer = {
	plans: [],
	edit: false,
	create: false,
	view: false,
};

const authReducer = (state = initialState, action: any): IPlanReducer => {
	switch (action.type) {
		case ActionTypes.SET_PLAN_LIST:
			return { ...state, plans: action.payload };
		case ActionTypes.SET_CURRENT_PLAN:
			return { ...state, currentPlan: action.payload };
		case ActionTypes.EDIT_PLAN_ACTION:
			return { ...state, edit: action.payload };
		case ActionTypes.CREATE_PLAN_ACTION:
			return { ...state, create: action.payload };
		case ActionTypes.SET_PLAN_FOR_ONE_MONTH:
			return { ...state, oneMonthPlan: action.payload };
		case ActionTypes.VIEW_PLAN_ACTION:
			return { ...state, view: action.payload };
		case ActionTypes.CLEAR_PLAN_ACTION:
			return { ...state, view: false, edit: false, create: false, currentPlan: undefined };
		default:
			return state;
	}
};

export default authReducer;
