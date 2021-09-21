interface ILogin {
	email: string;
	password: string;
}

interface ISignup extends ILogin {
	firstName?: string;
	lastName?: string;
}
interface ICreateUser {
	firstName: string;
	lastName: string;
	email: string;
	userRole: string;
}
