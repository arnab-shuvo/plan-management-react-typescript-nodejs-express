const User = require('../../models/user');
const Plan = require('../../models/plan');
const ObjectID = require('mongodb').ObjectID;
const bcrypt = require('bcrypt');

module.exports.getAllUser = async (req: any, res: any) => {
	try {
		if (req.user.userRole !== 'admin') {
			const allUser = await User.find({
				userRole: 'user',
				_id: {
					$ne: ObjectID(req.user._id),
				},
			}).select(['-password']);
			res.json(allUser);
		} else {
			const allUser = await User.find({
				_id: {
					$ne: ObjectID(req.user._id),
				},
				userRole: 'user',
			}).select(['-password']);
			res.json(allUser);
		}
	} catch (error) {
		return res.status(500).send(error);
	}
};
module.exports.deleteUser = async (req: any, res: any) => {
	try {
		let userToDelete = await User.findOne({ _id: ObjectID(req.params.id) });

		if (userToDelete) {
			if (
				req.user.userRole === 'admin' ||
				(req.user.userRole === 'manager' && userToDelete.userRole === 'user')
			) {
				await Plan.deleteMany({ userId: ObjectID(req.params.id) });
				await User.deleteOne({ _id: ObjectID(req.params.id) });
				res.json({ message: 'User deleted' });
			} else {
				res.status(401).json({
					status: 'error',
					message: 'You are not authorized to perform this action',
				});
			}
		} else {
			res.status(400).json({
				status: 'error',
				message: 'User Not Found',
			});
		}
	} catch (error) {
		return res.status(500).send(error);
	}
};
module.exports.getUser = async (req: any, res: any) => {
	if (req.params.id == null) {
		res.status(400).json({
			status: 'error',
			message: 'User id should be provided',
		});
	} else {
		try {
			const user = await User.findById(req.params.id);
			res.json(user);
		} catch (error) {
			return res.status(500).send(error);
		}
	}
};
module.exports.addUser = async (req: any, res: any) => {
	if (typeof req.body == undefined) {
		res.status(400).status(400).json({
			status: 'error',
			message: 'No Data Found',
		});
	} else {
		try {
			let newUserInfo = new User({
				email: req.body.email,
				password: '12345678',
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				userRole: req.body.userRole,
			});
			const newUser = await newUserInfo.save();

			const user = await User.findOne({ _id: ObjectID(newUser._id) }).select(['-password']);
			res.json(user);
		} catch (error) {
			console.log(error);

			return res.status(500).send(error);
		}
	}
};
module.exports.updateUser = async (req: any, res: any) => {
	if (typeof req.body == undefined || req.params.id == null) {
		res.status(400).json({
			status: 'error',
			message: 'Nothing to update',
		});
	} else {
		try {
			let userToUpdate = await User.findOne({ _id: ObjectID(req.params.id) });
			if (userToUpdate) {
				if (
					req.user.userRole === 'admin' ||
					(req.user.userRole === 'manager' && userToUpdate.userRole === 'user')
				) {
					await User.updateOne({ _id: ObjectID(req.params.id) }, { $set: req.body });
					res.json({ message: 'success' });
				} else {
					res.status(401).json({
						status: 'error',
						message: 'You are not authorized to perform this action',
					});
				}
			} else {
				res.status(400).json({
					status: 'error',
					message: 'User Not Found',
				});
			}
		} catch (error) {
			return res.status(500).send(error);
		}
	}
};

module.exports.addManager = async (req: any, res: any) => {
	if (typeof req.body == undefined) {
		res.status(400).json({
			status: 'error',
			message: 'No Data Found',
		});
	} else {
		try {
			const newUser = await User.create({ ...req.body, userRole: 'manager' });
			const user = await User.findOne({ _id: ObjectID(newUser._id) }).select(['-password']);
			res.json(user);
		} catch (error) {
			return res.status(500).send(error);
		}
	}
};

module.exports.myInfo = async (req: any, res: any) => {
	try {
		const me = await User.findOne({ _id: ObjectID(req.user._id) }).select(['-password']);
		res.json(me);
	} catch (error) {
		return res.status(500).send(error);
	}
};

module.exports.ifEmailExist = async (req: any, res: any) => {
	var email = req.query.email;

	if (!email) {
		return res.status(404).send('No Data Found');
	}
	try {
		const me = await User.findOne({ email });
		const response = me
			? {
					found: true,
			  }
			: {
					found: false,
			  };
		res.json(response);
	} catch (error) {
		return res.status(500).send(error);
	}
};
