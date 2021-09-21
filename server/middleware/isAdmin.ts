module.exports = (req: any, res: any, next: any) => {
	if (req.user.userRole === 'admin') {
		next();
	} else {
		res.status(401).json({
			message: 'You are not authorized ',
		});
	}
};
