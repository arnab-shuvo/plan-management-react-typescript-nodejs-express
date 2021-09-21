import { StyleSheet } from '@react-pdf/renderer';
const styles = StyleSheet.create({
	page: {
		backgroundColor: '#fff',
		padding: '20px',
	},
	logo: {
		fontWeight: 'extrabold',
		fontSize: '40px',

		textAlign: 'center',
		textTransform: 'uppercase',
	},
	logoSmall: {
		fontSize: '25px',
	},

	headerBar: {
		padding: '5px',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		textAlign: 'center',
	},
	planWrapper: {
		padding: '30px',
	},
	plans: {
		marginBottom: '30px',
	},
	destination: {
		fontWeight: 'extrabold',
	},
	date: {
		fontSize: '10px',
		marginBottom: '10px',
	},
	comment: {
		fontSize: '10px',
	},
	label: {
		fontWeight: 'extrabold',
	},
});

export default styles;
