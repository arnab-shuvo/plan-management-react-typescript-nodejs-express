import { get, patch, post, deleteRequest } from './api';

export const requestPLanList = async () => {
	try {
		const response = await get('plan');
		return response;
	} catch (err) {
		console.error(err);
	}
};
export const editPlan = async (id: string, data: IEditPlan) => {
	try {
		const response = await patch(`plan/${id}`, data);
		return response;
	} catch (err) {
		console.error(err);
	}
};
export const createPlan = async (data: IEditPlan) => {
	try {
		const response = await post(`plan`, JSON.stringify(data));
		return response;
	} catch (err) {
		console.error(err);
	}
};
export const deletePlanRequest = async (id: string) => {
	try {
		const response = await deleteRequest(`plan/${id}`);
		return response;
	} catch (err) {
		console.error(err);
	}
};
export const getOneMOnthPlan = async () => {
	try {
		const response = await get('plan/monthly');
		return response;
	} catch (err) {
		console.error(err);
	}
};
