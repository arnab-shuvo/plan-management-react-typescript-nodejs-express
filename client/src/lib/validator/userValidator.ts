const validationRules = (email: string) => {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const errors: any = {
		errorFound: false,
	};
	if (email === '' || !re.test(email)) {
		errors['email'] = 'Valid Email Required';
		errors.errorFound = true;
	}
	return errors;
};

export default validationRules;
