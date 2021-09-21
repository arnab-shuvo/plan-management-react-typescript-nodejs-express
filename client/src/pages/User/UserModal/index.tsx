import Grid from '@material-ui/core/Grid';
import React, { ChangeEvent } from 'react';
import Modal from 'components/Modal';
import TextField from '@material-ui/core/TextField';
import Button from 'components/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { checkEmail, createOrUpdateUser } from 'store/subStore/userStore/action';

type IProps = {
	open: boolean;
	onClose: () => void;
};

const UserModal: React.FC<IProps> = ({ open, onClose }) => {
	const dispatch = useDispatch();
	const { userInfo, currentUser } = useSelector((state: any) => state.userReducer);
	const { isEmailFound } = useSelector((state: any) => state.utilityReducer);

	const [email, setEmail] = useState<string>('');
	const [userRole, setUserRole] = useState<string>('user');
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [emailError, setEmailError] = useState<string>('');

	const isValid = () => {
		let valid = true;
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (email === '' || !re.test(email) || emailError !== '') {
			setEmailError('Provide a Valid Email');
			valid = false;
		}
		return valid;
	};

	useEffect(() => {
		if (currentUser) {
			setEmail(currentUser.email);
			setFirstName(currentUser.firstName);
			setLastName(currentUser.lastName);
			setUserRole(currentUser.userRole);
		}
	}, [currentUser]);
	useEffect(() => {
		if (isEmailFound) {
			setEmailError('User Already Exist');
		}
	}, [isEmailFound]);

	const onEmailChange = (email: string) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (re.test(email)) {
			dispatch(checkEmail(email));
		}
		setEmail(email);
		setEmailError('');
	};

	const submit = () => {
		if (isValid()) {
			if (currentUser) {
				dispatch(
					createOrUpdateUser({ email, firstName, lastName, userRole }, currentUser._id),
				);
			} else {
				dispatch(createOrUpdateUser({ email, firstName, lastName, userRole }));
			}
		}
	};

	console.log(userInfo, 'asdas');

	return (
		<Modal open={open} onClose={onClose} title={`${currentUser ? 'Edit' : 'Create'} User`}>
			<Grid container spacing={2}>
				<Grid item sm={6} xs={12}>
					<div className='input-box'>
						<TextField
							error={emailError !== ''}
							fullWidth
							required
							id='standard-basic'
							value={email}
							label='Email'
							type='email'
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								onEmailChange(e.target.value)
							}
						/>
						<p className='error'>{emailError}</p>
					</div>
				</Grid>
				<Grid item sm={6} xs={12}>
					<div className='input-box'>
						<FormControl fullWidth>
							<InputLabel id='demo-simple-select-outlined-label'>
								User Role
							</InputLabel>
							<Select
								labelId='demo-simple-select-outlined-label'
								id='demo-simple-select-outlined'
								value={userRole}
								onChange={(e: ChangeEvent<{ value: any }>) =>
									setUserRole(e.target.value)
								}
								label='User Role'>
								<MenuItem value={'user'}>User</MenuItem>
								<MenuItem value={'manager'}>Manager</MenuItem>
								{userInfo.userRole === 'admin' && (
									<MenuItem value={'admin'}>Admin</MenuItem>
								)}
							</Select>
						</FormControl>
						<p className='error'></p>
					</div>
				</Grid>

				<Grid item sm={6} xs={12}>
					<div className='input-box'>
						<TextField
							fullWidth
							id='standard-basic'
							value={firstName}
							label='First Name'
							type='text'
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setFirstName(e.target.value)
							}
						/>
						<p className='error'></p>
					</div>
				</Grid>
				<Grid item sm={6} xs={12}>
					<div className='input-box'>
						<TextField
							fullWidth
							id='standard-basic'
							value={lastName}
							label='Last Name'
							type='text'
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setLastName(e.target.value)
							}
						/>
						<p className='error'></p>
					</div>
				</Grid>

				<Grid item sm={12} xs={12}>
					<Button onClick={submit}>Save</Button>
				</Grid>
			</Grid>
		</Modal>
	);
};

export default UserModal;
