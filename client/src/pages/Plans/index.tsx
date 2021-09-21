import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { PlaneWrapper } from './styled';
import PlanCard from './PlanCard';
import PlanModal from './PlanModal';
import Button from 'components/Button';
import { useEffect } from 'react';
import {
	getPlanList,
	editPlanAction,
	setCurrentPlan,
	deletePlan,
	viewPlanAction,
	createPlanAction,
	clearPlanAction,
} from 'store/subStore/planStore/action';
import { toggleModal } from 'store/subStore/utilityStore/action';

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfDocument from './PlanPdf';

const Plans: React.FC = () => {
	const dispatch = useDispatch();
	const [planList, setPlans] = useState<IPlan[]>([]);
	const [sortBy, setSortBy] = useState<string>('none');
	const { plans, oneMonthPlan, edit, create, view } = useSelector(
		(state: any) => state.planReducer,
	);
	const { openModal } = useSelector((state: any) => state.utilityReducer);

	useEffect(() => {
		dispatch(getPlanList());
	}, [dispatch]);

	useEffect(() => {
		setPlans(plans);
	}, [plans]);

	useEffect(() => {
		if (sortBy !== 'none') {
			const plan: IPlan[] = plans.sort((a: IPlan, b: IPlan) => {
				if (sortBy === 'destination') {
					return a < b ? 1 : -1;
				} else {
					let dateA = new Date(a[sortBy]).getTime();
					let dateB = new Date(b[sortBy]).getTime();
					return dateA > dateB ? 1 : -1;
				}
			});
			setPlans(plan);
		}
	}, [sortBy, plans]);

	const editPlan = (plan: IPlan) => {
		dispatch(toggleModal(true));
		dispatch(editPlanAction(true));
		dispatch(setCurrentPlan(plan));
	};
	const viewPlan = (plan: IPlan) => {
		dispatch(toggleModal(true));
		dispatch(viewPlanAction(true));
		dispatch(setCurrentPlan(plan));
	};

	const closeModal = () => {
		dispatch(toggleModal(false));
		dispatch(clearPlanAction());
	};

	const addnewPlan = () => {
		dispatch(createPlanAction(true));
		dispatch(toggleModal(true));
	};

	const deletePlanRequest = (id: string) => {
		const confirmation = window.confirm('Are You sure that you want to delete this plan?');
		if (confirmation === true) {
			dispatch(deletePlan(id));
		}
	};
	const sort = (e: any) => {
		setSortBy(e.target.value);
	};

	return (
		<PlaneWrapper>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Grid container justifyContent='space-between' alignItems='center'>
						<Grid item xs={12} sm={6}>
							<h3 className='page-title'>Plans</h3>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							container
							justifyContent='flex-end'
							alignItems='center'
							spacing={3}>
							<Grid item xs={12} sm={6}>
								{oneMonthPlan?.length ? (
									<PDFDownloadLink
										document={<PdfDocument plans={oneMonthPlan} />}
										fileName={'Plan Maker'}
										className='pdfAnchor'>
										<Button buttonType='secondary'>
											Download Plan for next 1 month
										</Button>
									</PDFDownloadLink>
								) : (
									''
								)}
							</Grid>
							<Grid item xs={12} sm={3}>
								<FormControl fullWidth>
									<InputLabel id='demo-simple-select-outlined-label'>
										Sort By
									</InputLabel>
									<Select
										labelId='demo-simple-select-outlined-label'
										id='demo-simple-select-outlined'
										value={sortBy}
										onChange={sort}
										label='Sort By'>
										<MenuItem value={'none'}>Default</MenuItem>
										<MenuItem value={'startDate'}>Start Date</MenuItem>
										<MenuItem value={'endDate'}>End Date</MenuItem>
										<MenuItem value={'destination'}>Destination</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid container justifyContent='flex-end' item xs={12} sm={3}>
								<Button onClick={addnewPlan}>Add New</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid container item xs={12} sm={12} md={12} spacing={3} alignItems='stretch'>
					{planList?.length ? (
						<>
							{planList.map((plan: IPlan, index: number) => (
								<Grid key={index} item xs={12} sm={6} lg={4} xl={3}>
									<PlanCard
										plan={plan}
										editFunction={editPlan}
										viewFunction={viewPlan}
										deleteFunction={deletePlanRequest}
									/>
								</Grid>
							))}
						</>
					) : (
						'No Plan Found'
					)}
				</Grid>
			</Grid>

			{openModal && (edit || create) && <PlanModal open={openModal} onClose={closeModal} />}
			{openModal && view && <PlanModal open={openModal} onClose={closeModal} />}
		</PlaneWrapper>
	);
};

export default Plans;
