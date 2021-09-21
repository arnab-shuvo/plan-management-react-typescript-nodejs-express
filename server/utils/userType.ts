module.exports.isUser = (user: any) => {
	return user.userRole === 'user';
};
module.exports.isAdmin = (user: any) => {
	return user.userRole === 'admin';
};
module.exports.isManager = (user: any) => {
	return user.userRole === 'manager';
};
