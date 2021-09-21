type IPlan = {
	_id: string;
	startDate: string;
	endDate: string;
	destination: string;
	comment: string;
	userId: IUserList;
	[key: string]: string;
};
interface IPlanReducer {
	plans: IPlan[];
	currentPlan?: IPlan;
	oneMonthPlan?: IPlan[];
	edit: boolean;
	view: boolean;
	create: boolean;
}

type IEditPlan = {
	startDate: string;
	endDate: string;
	destination: string;
	comment: string;
	userId?: string;
};
