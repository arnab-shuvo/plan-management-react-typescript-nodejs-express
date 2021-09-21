import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { PlanCardWrapper } from './styled';
import dayjs from 'dayjs';
import Button from 'components/Button';

import VisibilityIcon from '@material-ui/icons/Visibility';
import { Grid } from '@material-ui/core';

type IProps = {
	editFunction: (plan: IPlan) => void;
	deleteFunction: (id: string) => void;
	viewFunction: (plan: IPlan) => void;
	plan: IPlan;
};

const PlanCard: React.FC<IProps> = ({ editFunction, plan, deleteFunction, viewFunction }) => {
	const startDate = dayjs(plan.startDate).format('DD-MM-YYYY');
	const endDate = dayjs(plan.endDate).format('DD-MM-YYYY');
	const difference = dayjs(dayjs().format('YYYY-MM-DD')).diff(dayjs(plan.startDate), 'day');
	const isIncoming = difference < 0 ? true : false;

	return (
		<PlanCardWrapper>
			<CardContent>
				<Grid container spacing={2}>
					<Grid item md={12} xs={12}>
						<p className='tag-line'>
							<span className={isIncoming ? 'incoming' : 'ongoing'}>
								{isIncoming ? 'Incoming' : 'Started'}
							</span>
						</p>
					</Grid>
					<Grid item md={12} xs={12}>
						<p className='title'>Destination: {plan.destination}</p>
						<p className='user-name'>
							Plan by: <span>{plan.userId?.email}</span>
						</p>
					</Grid>
					<Grid container item md={12} xs={12}>
						<Grid item xs={6}>
							<div className='date-wrapper '>
								<p>Start Date</p>
								<p className='date'>{startDate}</p>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className='date-wrapper right'>
								<p>End Date</p>
								<p className='date'>{endDate}</p>
							</div>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<p className='comments-title'>Comment:</p>
						<p className='comments'>{plan.comment}</p>
					</Grid>
					<Grid item xs={12}>
						{difference < 0 ? (
							<p className='day-left'>
								<span>{Math.abs(difference)}</span> days to go`
							</p>
						) : (
							<p className='day-left'>Event has already started</p>
						)}
					</Grid>
					<Grid container item xs={12}>
						<Grid container item xs={4}>
							<Button buttonType={'ghost'} onClick={() => viewFunction(plan)}>
								<VisibilityIcon />
							</Button>
						</Grid>
						<Grid container item xs={4} justifyContent='center'>
							<Button
								buttonType={'ghost'}
								color='danger'
								onClick={() => deleteFunction(plan._id)}>
								<DeleteIcon />
							</Button>
						</Grid>
						<Grid container item xs={4} justifyContent='flex-end'>
							<Button buttonType={'ghost'} onClick={() => editFunction(plan)}>
								<EditIcon />
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</CardContent>
		</PlanCardWrapper>
	);
};

export default PlanCard;
