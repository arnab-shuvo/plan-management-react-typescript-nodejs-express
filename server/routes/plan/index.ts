import express = require('express');
const router = express.Router();
const { planValidator } = require('../../validator');
const { isAuth } = require('../../auth/auth');
const isOwnPlan = require('../../middleware/isOwnPlan');
const isUserOrAdmin = require('../../middleware/isUserOrAdmin');
const {
	getAllPlan,
	createPlan,
	deletePlan,
	editPlan,
	getOneMonthPlan,
} = require('../../controller/plan');

router.get('/', isAuth, isUserOrAdmin, getAllPlan);
router.post('/', isAuth, isUserOrAdmin, planValidator, createPlan);
router.delete('/:planId', isAuth, isUserOrAdmin, isOwnPlan, deletePlan);
router.patch('/:planId', isAuth, isUserOrAdmin, isOwnPlan, editPlan);
router.get('/monthly', isAuth, isUserOrAdmin, getOneMonthPlan);

module.exports = router;
