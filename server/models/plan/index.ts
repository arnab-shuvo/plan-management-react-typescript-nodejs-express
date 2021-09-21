import mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../user');

const PlanSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: User,
		required: true,
	},
	startDate: {
		type: Date,
		required: true,
	},
	endDate: {
		type: Date,
		required: true,
	},
	destination: {
		type: String,
		required: true,
	},
	comment: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('plan', PlanSchema);
