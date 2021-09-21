import { Grid, TextField } from '@material-ui/core';
import Button from 'components/Button';
import PublicLayout from 'components/Layout/PublicLayout';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { SignUpWrapper } from './styled';
import { signUpAction } from 'store/subStore/authStore/action';
import { signUpReset } from 'store/subStore/utilityStore/action';
import { checkEmail } from 'store/subStore/userStore/action';

const Signup: React.FC = () => {
	const history = useHistory();
	const utilityReducer = useSelector((state: any) => state.utilityReducer);
	const { isEmailFound } = useSelector((state: any) => state.utilityReducer);
	const dispatch = useDispatch();
	const [email, setEmail] = useState<string>('');
	const [emailError, setEmailError] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [passwordError, setPasswordError] = useState<string>('');
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [signupError, setSignupError] = useState<string>();

	useEffect(() => {
		if (utilityReducer.signup) {
			if (utilityReducer.signup.success) {
				dispatch(signUpReset());
				history.push('/');
			} else {
				setSignupError(utilityReducer.signup.message);
			}
		}
	}, [utilityReducer, history, dispatch]);
	useEffect(() => {
		if (isEmailFound) {
			setEmailError('User Already Exist');
		}
	}, [isEmailFound]);
	const submitForm = () => {
		const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
		if (
			email !== '' &&
			re.test(email) &&
			emailError === '' &&
			password.length > 7 &&
			password === confirmPassword
		) {
			dispatch(
				signUpAction({
					email,
					password,
					firstName,
					lastName,
				}),
			);
		} else {
			if (email === '' || !re.test(email)) {
				setEmailError('Please Enter Valid Email');
			}
			if (password.length < 8 || password.length > 22) {
				setPasswordError('Password Must be of length 8-22 character');
			} else if (password !== confirmPassword) {
				setPasswordError('Password and Confirm Password Should Match');
			}
		}
	};

	const onEmailChange = (email: string) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (re.test(email)) {
			dispatch(checkEmail(email));
		}
		setEmail(email);
		setEmailError('');
	};
	return (
		<PublicLayout error={signupError}>
			<SignUpWrapper container spacing={2}>
				<Grid item md={12} xs={12}>
					<div className='input-wrapper'>
						<TextField
							error={emailError !== ''}
							fullWidth
							id='standard-basic'
							value={email}
							label='Email '
							type='email'
							required
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								onEmailChange(e.target.value)
							}
						/>
						<p className='error'>{emailError}</p>
					</div>
				</Grid>
				<Grid item sm={6} xs={12}>
					<div className='input-wrapper'>
						<TextField
							fullWidth
							id='standard-basic'
							error={passwordError !== ''}
							label='Password '
							type={'password'}
							required
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								setPassword(e.target.value);
								setPasswordError('');
							}}
							value={password}
						/>
						<p className='error'>{passwordError}</p>
					</div>
				</Grid>
				<Grid item sm={6} xs={12}>
					<div className='input-wrapper'>
						<TextField
							required
							fullWidth
							id='standard-basic'
							error={passwordError !== ''}
							label='Confirm Password '
							type={'password'}
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								setConfirmPassword(e.target.value);
								setPasswordError('');
							}}
							value={confirmPassword}
						/>
						<p className='error'>{passwordError}</p>
					</div>
				</Grid>
				<Grid item sm={6} xs={12}>
					<div className='input-wrapper'>
						<TextField
							fullWidth
							id='standard-basic'
							label='First Name'
							type={'text'}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setFirstName(e.target.value)
							}
							value={firstName}
						/>
					</div>
				</Grid>
				<Grid item sm={6} xs={12}>
					<div className='input-wrapper'>
						<TextField
							fullWidth
							id='standard-basic'
							label='Last Name'
							type={'text'}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setLastName(e.target.value)
							}
							value={lastName}
						/>
					</div>
				</Grid>
				<Grid item md={12} xs={12}>
					<Button onClick={submitForm}>Signup</Button>
					<p>
						Alredy regestered? <Link to='/login'>Login</Link>
					</p>
				</Grid>
			</SignUpWrapper>
		</PublicLayout>
	);
};
export default Signup;
