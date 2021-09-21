import mongoose = require('mongoose');
const Plan = require('../../models/plan');
const ObjectID = require('mongodb').ObjectID;
const dayjs = require('dayjs');
const { isUser, isAdmin } = require('../../utils/userType');
var utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

module.exports.getAllPlan = async (req: any, res: any) => {
	try {
		let param = {};
		if (req.user.userRole === 'user') {
			param = { userId: ObjectID(req.user._id) };
		}
		const allPlan = await Plan.find(param).populate('userId', { password: 0 });
		res.json(allPlan);
	} catch (error) {
		return res.status(500).send(error);
	}
};

module.exports.getAllPlanByUser = async (req: any, res: any) => {
	try {
		const allPlanOfUser = await Plan.find({ userId: ObjectID(req.user._id) });

		return res.send(allPlanOfUser);
	} catch (error) {
		return res.status(500).send(error);
	}
};

module.exports.createPlan = async (req: any, res: any) => {
	try {
		const userId = isAdmin(req.user) ? ObjectID(req.body.userId) : ObjectID(req.user._id);
		const newPlan = await Plan.create({ ...req.body, userId });
		return res.send(newPlan);
	} catch (error) {
		return res.status(500).send(error);
	}
};
module.exports.deletePlan = async (req: any, res: any) => {
	try {
		await Plan.remove({ _id: ObjectID(req.params.planId) });
		res.json({ message: 'User deleted' });
	} catch (error) {
		return res.status(500).send(error);
	}
};
module.exports.editPlan = async (req: any, res: any) => {
	try {
		await Plan.updateOne({ _id: ObjectID(req.params.planId) }, { $set: req.body });
		res.json({ message: 'success' });
	} catch (error) {
		return res.status(500).send(error);
	}
};
module.exports.getOneMonthPlan = async (req: any, res: any) => {
	let param: any = [
		{
			startDate: {
				$gte: dayjs().utc().format(),
				$lt: dayjs().add(1, 'month').utc().format(),
			},
		},
	];
	if (req.user.userRole === 'user') {
		param.push({ userId: ObjectID(req.user._id) });
	}
	try {
		const plans = await Plan.find({
			$and: param,
		}).populate('userId', { password: 0 });

		res.json(plans);
	} catch (error) {
		return res.status(500).send(error);
	}
};
