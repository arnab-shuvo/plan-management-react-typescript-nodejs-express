import passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

//Create a passport middleware to handle user registration
passport.use(
	'signup',
	new localStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true,
		},
		async (req: any, email: string, password: string, done: any) => {
			email = email.toLowerCase();

			try {
				//Find the user associated with the email provided by the user
				const isExistUser = await User.findOne({ email });
				if (!isExistUser) {
					//Save the information provided by the user to the the database
					const user = await User.create(req.body);
					//Send the user information to the next middleware
					return done(null, {
						message: 'Registration Successful',
						status: true,
						user,
					});
				}
				return done(null, { status: false }, { message: 'Email already exist' });
			} catch (error) {
				done(error);
			}
		},
	),
);

//Create a passport middleware to handle User login
passport.use(
	'login',
	new localStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
		},
		async (email: any, password: any, done: any) => {
			try {
				//Find the user associated with the email provided by the user
				const user = await User.findOne({ email });
				if (!user) {
					//If the user isn't found in the database, return a message
					return done(null, {
						status: 401,
						message: 'Please enter valid email and password',
					});
				}
				//Validate password and make sure it matches with the corresponding hash stored in the database
				//If the passwords match, it returns a value of true.
				const validate = await user.isValidPassword(password, user.password);
				if (!validate) {
					return done(null, {
						status: 401,
						message: 'Please enter valid email and password',
					});
				}

				const body = { _id: user._id, email: user.email };
				const token = jwt.sign({ user: body }, 'top_secret', {
					expiresIn: '2d',
				});
				let date = new Date();
				const expire_at = date.setDate(date.getDate() + 2);
				//Send the user information to the next middleware
				return done(null, {
					message: 'Logged in Successfully',
					userInfo: {
						user: user.email,
						token: token,
						expire_at: expire_at,
					},
				});
			} catch (error) {
				return done(error);
			}
		},
	),
);

passport.use(
	new JWTstrategy(
		{
			secretOrKey: 'TOP_SECRET',
			jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token'),
		},
		async (token: any, done: any) => {
			try {
				return done(null, token.user);
			} catch (error) {
				done(error);
			}
		},
	),
);

module.exports.isAuth = async (req: any, res: any, next: any) => {
	const authorizationHeaader = req.headers.authorization;

	if (authorizationHeaader) {
		const token = authorizationHeaader.split('bearer ')[1];
		try {
			const result = jwt.verify(token, 'top_secret').user;

			req.decoded = result;
			const currentUser = await User.findOne({ _id: result._id });
			if (currentUser) {
				req.user = currentUser;
				next();
			} else {
				const response = {
					error: `Unauthorized request`,
				};
				return res.status(401).send(response);
			}
		} catch (err) {
			return res.json({ err: err }).status(401);
		}
	} else {
		const result = {
			error: `Authentication error. Bearer Token required.`,
		};
		return res.status(401).send(result);
	}
};
