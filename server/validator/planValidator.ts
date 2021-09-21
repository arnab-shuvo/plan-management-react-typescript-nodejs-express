import dayjs = require('dayjs');
const User = require('../models/user');
const { isAdmin } = require('../models/user');
const ObjectID = require('mongodb').ObjectID;

module.exports = (req: any, res: any, next: any) => {
	//Validate post creation rule from schema
	req.check('destination', 'Destination required').notEmpty();
	req.check('startDate', 'Start Date required').notEmpty();
	req.check('endDate', 'End Date required').notEmpty();
	req.check('comment', 'Comment required').notEmpty();
	req.check('startDate', 'Require Valid Start Date').custom((d: any) => {
		if (!dayjs(d).isValid()) {
			return false;
		}
		return true;
	});
	req.check('endDate', 'Require Valid End Date').custom((d: any) => {
		if (!dayjs(d).isValid()) {
			return false;
		}
		return true;
	});
	req.check('startDate', 'Require Valid Date Range').custom((d: any) => {
		if (!dayjs(d).isBefore(req.body.endDate)) {
			return false;
		}
		return true;
	});
	req.check('userId', 'Require UserId').custom(async (d: any) => {
		if (isAdmin(req.userId)) {
			if (req.body.userId) {
				const user = await User.findOne({
					and: [{ _id: ObjectID(req.userId) }, { userRole: 'user' }],
				});
				return !user ? false : true;
			}
			return false;
		}
		return true;
	});

	const errors = req.validationErrors();

	let errorMessage: any = {};
	if (errors) {
		errors.forEach((err: any) => {
			if (!errorMessage[err.param]) {
				errorMessage[err.param] = err.msg;
			}
		});
		return res.status(400).json(errors);
	}
	next();
};
