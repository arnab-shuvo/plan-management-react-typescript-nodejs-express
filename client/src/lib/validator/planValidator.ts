import dayjs from 'dayjs';

const validationRules = (
	destination: string,
	comment: string,
	startDate: string,
	endDate: string,
	userId?: string,
) => {
	const errors: any = {
		errorFound: false,
	};
	if (destination === '') {
		errors['destination'] = 'Destination Required';
		errors.errorFound = true;
	}
	if (comment === '') {
		errors['comment'] = 'Comment Required';
		errors.errorFound = true;
	}
	if (userId && userId === '') {
		errors['userId'] = 'User must be selected';
		errors.errorFound = true;
	}
	if (startDate === '') {
		errors['startDate'] = 'Valid Start Date Required';
		errors.errorFound = true;
	}
	if (endDate === '') {
		errors['endDate'] = 'Valid End Date Required';
		errors.errorFound = true;
	}
	if (dayjs(startDate).isAfter(dayjs(endDate))) {
		console.log(
			dayjs(startDate).isAfter(dayjs(endDate)),
			'==dayjs(startDate).isAfter(dayjs(endDate))',
		);

		errors['startDate'] = 'Valid Start Date Required';
		errors['endDate'] = 'Valid End Date Required';
		errors.errorFound = true;
	}
	return errors;
};

export default validationRules;
