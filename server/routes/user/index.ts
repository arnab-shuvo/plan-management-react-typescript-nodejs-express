import express = require('express');
const router = express.Router();
const { signUpValidator, addUserValidator } = require('../../validator');
const { isAuth } = require('../../auth/auth');
const isManagerOrAdmin = require('../../middleware/isManagerOrAdmin');
const isAdmin = require('../../middleware/isAdmin');
const {
	getAllUser,
	deleteUser,
	getUser,
	addUser,
	updateUser,
	addManager,
	ifEmailExist,
} = require('../../controller/user');

router.get('/email-check', ifEmailExist);
router.get('/', isAuth, isManagerOrAdmin, getAllUser);
router.delete('/:id', isAuth, isManagerOrAdmin, deleteUser);
router.get('/:id', isAuth, getUser);
router.post('/', isAuth, addUserValidator, isManagerOrAdmin, addUser);
router.patch('/:id', isAuth, isManagerOrAdmin, updateUser);
router.post('/add-manager', isAuth, isAdmin, signUpValidator, addManager);

module.exports = router;
