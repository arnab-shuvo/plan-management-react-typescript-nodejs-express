module.exports = (req: any, res: any, next: any) => {
	if (req.user.userRole === 'user') {
		next();
	} else {
		res.status(401).json({
			message: 'You are not authorized ',
		});
	}
};
