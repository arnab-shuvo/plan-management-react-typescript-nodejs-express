import { TextField } from '@material-ui/core';
import Button from 'components/Button';
import PublicLayout from 'components/Layout/PublicLayout';
import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginAction } from 'store/subStore/authStore/action';
import { LoginWrapper } from './styled';

const Login: React.FC = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState<string>('');
	const [emailError, setEmailError] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [passwordError, setPasswordError] = useState<string>('');
	const { login } = useSelector((state: any) => state.utilityReducer);

	const submitForm = () => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (email !== '' && re.test(email) && password.length > 7) {
			dispatch(
				loginAction({
					email,
					password,
				}),
			);
		} else {
			if (email === '' || re.test(email)) {
				setEmailError('Please Enter Valid Email');
			}
			if (password.length < 8 || password.length > 22) {
				setPasswordError('Password Must be of length 8-22 character');
			}
		}
	};
	return (
		<PublicLayout error={login?.message}>
			<LoginWrapper>
				<div className='input-wrapper'>
					<TextField
						error={emailError !== ''}
						fullWidth
						id='standard-basic'
						value={email}
						label='Email'
						type='email'
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							setEmail(e.target.value);
							setEmailError('');
						}}
					/>
					<p className='error'>{emailError}</p>
				</div>
				<div className='input-wrapper'>
					<TextField
						fullWidth
						id='standard-basic'
						error={passwordError !== ''}
						label='Password'
						type={'password'}
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							setPassword(e.target.value);
							setPasswordError('');
						}}
						value={password}
					/>
					<p className='error'>{passwordError}</p>
				</div>
				<Button onClick={submitForm}>Login</Button>
				<p>
					Don't Have any account yet? <Link to='/signup'>Singup</Link>
				</p>
			</LoginWrapper>
		</PublicLayout>
	);
};
export default Login;
