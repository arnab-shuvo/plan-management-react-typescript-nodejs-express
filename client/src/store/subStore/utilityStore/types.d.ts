interface IUtilityReducer {
	signup?: ISignUpResolver;
	login?: ILoginResolver;
	openModal: boolean;
	loader: boolean;
	isEmailFound?: boolean;
}
type ISignUpResolver = {
	success: boolean;
	message: string;
};
type ILoginResolver = {
	message: string;
};
