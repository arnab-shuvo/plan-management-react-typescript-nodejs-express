import { Grid } from '@material-ui/core';
import dayjs from 'dayjs';
import React from 'react';
import { useSelector } from 'react-redux';
import { ViewModalWrapper } from './styled';

const ViewModal: React.FC = () => {
	const {
		currentPlan: {
			startDate,
			endDate,
			destination,
			comment,
			userId: { email },
		},
	} = useSelector((state: any) => state.planReducer);
	return (
		<ViewModalWrapper container spacing={2}>
			<Grid className='section' item xs={12} sm={6}>
				<p className='label'>Destination</p>
				<p className='destination'>{destination}</p>
			</Grid>
			<Grid className='section' item xs={12} sm={6}>
				<p className='label'>Plan By</p>
				<p className='plan-by'>{email}</p>
			</Grid>
			<Grid className='section' item xs={6}>
				<p className='label small'>Start Date</p>
				<p className='date'>{dayjs(startDate).format('DD-MM-YYYY')}</p>
			</Grid>
			<Grid className='section' item xs={6}>
				<p className='label small'>End Date</p>
				<p className='date'>{dayjs(endDate).format('DD-MM-YYYY')}</p>
			</Grid>
			<Grid item xs={12}>
				<p className='label'>Comment</p>
				<p className='comment'>{comment}</p>
			</Grid>
		</ViewModalWrapper>
	);
};

export default ViewModal;
