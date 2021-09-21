import mongoose = require('mongoose');
const Plan = require('../models/plan');
const ObjectID = require('mongodb').ObjectID;

module.exports = async (req: any, res: any, next: any) => {
	if (req.user.userRole === 'user') {
		const plan = await Plan.findOne({
			$and: [{ userId: ObjectID(req.user._id) }, { _id: ObjectID(req.params.planId) }],
		});
		if (!plan) {
			res.status(401).json({
				message: 'You are not authorized to do so',
			});
		}
	}
	next();
};
