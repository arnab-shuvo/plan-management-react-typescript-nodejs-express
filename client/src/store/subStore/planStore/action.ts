import {
	editPlan,
	requestPLanList,
	createPlan,
	deletePlanRequest,
	getOneMOnthPlan,
} from 'lib/network/plan';
import { ActionTypes } from '../../actionTypes';
import { toggleModal, loaderToggle } from '../utilityStore/action';

const setPlanList = (data: IPlan[]) => ({
	type: ActionTypes.SET_PLAN_LIST,
	payload: data,
});
export const editPlanAction = (data: boolean) => ({
	type: ActionTypes.EDIT_PLAN_ACTION,
	payload: data,
});
export const viewPlanAction = (data: boolean) => ({
	type: ActionTypes.VIEW_PLAN_ACTION,
	payload: data,
});
export const createPlanAction = (data: boolean) => ({
	type: ActionTypes.CREATE_PLAN_ACTION,
	payload: data,
});
export const clearPlanAction = () => ({
	type: ActionTypes.CLEAR_PLAN_ACTION,
});

export const setCurrentPlan = (data: IPlan | undefined) => ({
	type: ActionTypes.SET_CURRENT_PLAN,
	payload: data,
});

export const getPlanList = () => {
	return async (dispatch: any) => {
		dispatch(loaderToggle(true));
		const pLanList = await requestPLanList();
		dispatch(setPlanList(pLanList));
		dispatch(getPlanForOneMonth());
		dispatch(loaderToggle(false));
	};
};

export const submitPlan = (data: IEditPlan, id?: string) => {
	return async (dispatch: any) => {
		dispatch(loaderToggle(true));
		if (id) {
			await editPlan(id, data);
		} else {
			await createPlan(data);
		}
		dispatch(getPlanList());
		dispatch(getPlanForOneMonth());
		dispatch(toggleModal(false));
		dispatch(loaderToggle(false));
	};
};

export const deletePlan = (id: string) => {
	return async (dispatch: any) => {
		dispatch(loaderToggle(true));
		await deletePlanRequest(id);
		dispatch(getPlanList());
		dispatch(loaderToggle(false));
	};
};
const setPlanForOneMonth = (data: IPlan[]) => ({
	type: ActionTypes.SET_PLAN_FOR_ONE_MONTH,
	payload: data,
});

export const getPlanForOneMonth = () => {
	return async (dispatch: any) => {
		const plan: IPlan[] = await getOneMOnthPlan();
		dispatch(setPlanForOneMonth(plan));
	};
};
