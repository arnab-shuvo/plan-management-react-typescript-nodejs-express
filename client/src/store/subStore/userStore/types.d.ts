interface IUserReducer {
	userInfo?: IUserInfo;
	userList?: IUserList[];
	currentUser?: IUserList;
}

interface IUserInfo {
	userRole: string;
	email: string;
	firstName: string;
	lastName: string;
}
interface IUserList extends IUserInfo {
	_id: string;
}
