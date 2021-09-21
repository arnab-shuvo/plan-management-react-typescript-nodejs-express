import Grid from '@material-ui/core/Grid';
import React, { ChangeEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from 'components/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import { submitPlan } from 'store/subStore/planStore/action';
import validationRules from 'lib/validator/planValidator';

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const EditModal: React.FC = () => {
	const dispatch = useDispatch();
	const { edit, currentPlan } = useSelector((state: any) => state.planReducer);
	const { userList, userInfo } = useSelector((state: any) => state.userReducer);
	const [destination, setDestination] = useState<string>('');
	const [comment, setComment] = useState<string>('');
	const [userId, setUserId] = useState<string>('');
	const [startDate, setStartDate] = useState<string>('');
	const [endDate, setEndDate] = useState<string>('');
	const [destinationError, setDestinationError] = useState<string>('');
	const [commentError, setCommentError] = useState<string>('');
	const [startDateError, setStartDateError] = useState<string>('');
	const [endDateError, setEndDateError] = useState<string>('');
	const [userIdError, setUserIdError] = useState<string>('');

	useEffect(() => {
		if (currentPlan) {
			setDestination(currentPlan.destination);
			setComment(currentPlan.comment);
			setStartDate(currentPlan.startDate);
			setEndDate(currentPlan.endDate);
		}
	}, [currentPlan]);

	const isValid = (isNotUser: boolean) => {
		const errors = isNotUser
			? validationRules(destination, comment, startDate, endDate, userId)
			: validationRules(destination, comment, startDate, endDate);

		if (errors.errorFound) {
			if (errors.destination) {
				setDestinationError(errors.destination);
			}
			if (errors.comment) {
				setCommentError(errors.destination);
			}
			if (errors.startDate) {
				setStartDateError(errors.startDate);
			}
			if (errors.endDate) {
				setEndDateError(errors.endDate);
			}
			if (errors.userId) {
				setUserIdError(errors.userId);
			}
			return false;
		}
		return true;
	};

	const submit = () => {
		if (isValid(userInfo.userRole !== 'user')) {
			if (edit) {
				dispatch(
					submitPlan(
						{
							destination,
							comment,
							startDate,
							endDate,
						},
						currentPlan._id,
					),
				);
			} else {
				console.log('asdasd');

				const param: IEditPlan = {
					destination,
					comment,
					startDate,
					endDate,
				};
				if (userInfo.userRole !== 'user') {
					param.userId = userId;
				}
				dispatch(submitPlan(param));
			}
		}
	};
	return (
		<Grid container spacing={2}>
			<Grid item sm={!edit && userInfo.userRole !== 'user' ? 12 : 6} xs={12}>
				<div className='input-box'>
					<TextField
						error={destinationError !== ''}
						fullWidth
						required
						id='destination'
						value={destination}
						label='Destination'
						type='text'
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							setDestination(e.target.value);
							setDestinationError('');
						}}
					/>
					<p className='error'>{destinationError}</p>
				</div>
			</Grid>
			{!edit && userInfo.userRole !== 'user' && (
				<Grid item sm={6} xs={12}>
					<div className='input-box'>
						<FormControl fullWidth>
							<InputLabel id='demo-simple-select-outlined-label'>User</InputLabel>
							<Select
								required
								error={userIdError !== ''}
								labelId='demo-simple-select-outlined-label'
								id='user'
								value={userId}
								onChange={(e: ChangeEvent<{ value: any }>) => {
									setUserIdError('');
									setUserId(e.target.value);
								}}
								label='User'>
								{userList?.length &&
									userList.map((user: IUserList, index: number) => (
										<MenuItem key={index} value={user._id}>
											{user.email}
										</MenuItem>
									))}
							</Select>
						</FormControl>
						<p className='error'>{userIdError}</p>
					</div>
				</Grid>
			)}
			<Grid item sm={6} xs={12}>
				<div className='input-box'>
					<TextField
						required
						error={commentError !== ''}
						fullWidth
						id='comment'
						value={comment}
						label='Comment'
						type='text'
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							setComment(e.target.value);
							setCommentError('');
						}}
					/>
					<p className='error'>{commentError}</p>
				</div>
			</Grid>
			<Grid item sm={6} xs={12}>
				<div className='input-box'>
					<TextField
						required
						error={startDateError !== ''}
						fullWidth
						id='date'
						label='Start Date'
						type='date'
						value={dayjs(startDate).format('YYYY-MM-DD')}
						InputLabelProps={{
							shrink: true,
						}}
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							setStartDate(e.target.value);
							setStartDateError('');
						}}
					/>
					<p className='error'>{startDateError}</p>
				</div>
			</Grid>
			<Grid item sm={6} xs={12}>
				<div className='input-box'>
					<TextField
						required
						error={endDateError !== ''}
						fullWidth
						id='date'
						label='End Date'
						type='date'
						value={dayjs(endDate).format('YYYY-MM-DD')}
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							setEndDate(e.target.value);
							setEndDateError('');
						}}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<p className='error'>{endDateError}</p>
				</div>
			</Grid>
			<Grid item sm={12} xs={12}>
				<Button onClick={submit}>Save</Button>
			</Grid>
		</Grid>
	);
};

export default EditModal;
