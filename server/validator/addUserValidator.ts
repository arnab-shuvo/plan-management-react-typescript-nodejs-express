module.exports = (req: any, res: any, next: any) => {
	//Validate post creation rule from schema
	// req.check({ StopValidationOnFirstError: true });
	req.check('email', 'Email required').notEmpty();
	req.check('email', 'Provide a valid email id').isEmail();
	req.check('userRole', 'User Role required').notEmpty();

	const errors = req.validationErrors({ StopValidationOnFirstError: true });
	if (errors) {
		const response: any = {};
		Object.keys(errors).forEach((key: any) => {
			response[key] = errors[key].msg;
		});
		return res.status(401).json(response);
	}
	next();
};
