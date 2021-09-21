const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const router = require('./routes');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const passport = require('passport');
var cors = require('cors');

require('./auth/auth');
dotenv.config();

mongoose
	.connect('mongodb://localhost:27017/travel-plan', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('DB Connected'))
	.catch((err: any) => console.log(`error connecting db::  ${err.message}`));
mongoose.set('useCreateIndex', true);

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(expressValidator());
app.use(passport.initialize());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(
	bodyParser.urlencoded({
		extended: true,
		limit: '50mb',
	}),
);
app.use(function (req: any, res: any, next: any) {
	res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept,Authorizaion',
	);

	next();
});
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use('/fileserver', express.static(path.join(__dirname, '')));
app.use('/api', router);

app.get('*', (req: any, res: any) => {
	res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const port = 3000;
app.listen(port, () => {
	console.log(`Listening ${port}`);
});
