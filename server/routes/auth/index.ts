import express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { signUpValidator, loginValidator } = require('../../validator');
const { isAuth } = require('../../auth/auth');
const { myInfo } = require('../../controller/user');

router.post(
	'/login',
	loginValidator,
	passport.authenticate('login', { session: false }),
	(req: any, res: any) => {
		res.status(req.user.status ? req.user.status : 200).json(req.user);
	},
);
//When the user sends a post request to this route, passport authenticates the user based on the
//middleware created previously
router.post(
	'/signup',
	signUpValidator,
	passport.authenticate('signup', { session: false }),
	(req: any, res: any) => {
		if (req.user.status) {
			res.json({
				message: req.user.message,
				id: req.user.user._id,
			});
		} else {
			res.status(401).json({
				message: req.authInfo.message,
			});
		}
	},
);
router.get('/me', isAuth, myInfo);
module.exports = router;
