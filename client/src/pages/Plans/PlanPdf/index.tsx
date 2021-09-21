import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import styles from './styled';
import dayjs from 'dayjs';

type IProps = {
	plans: IPlan[];
};

const PdfDocument: React.FC<IProps> = ({ plans }) => {
	return (
		<Document title={'My Planer'}>
			<Page size='A4' style={styles.page}>
				<View style={styles.headerBar}>
					<Text style={styles.logo}>
						P<Text style={styles.logoSmall}>LsAN</Text>M
						<Text style={styles.logoSmall}>AKER</Text>
					</Text>
				</View>
				<View style={styles.headerBar}>
					<Text>Here is a list of your next 1 month's plan</Text>
				</View>
				<View style={styles.planWrapper}>
					{plans.map((plans: IPlan, index: number) => (
						<View key={index} style={styles.plans}>
							<Text style={styles.destination}>Destination: {plans.destination}</Text>
							<Text style={styles.date}>User: {plans.userId.email}</Text>
							<Text style={styles.date}>
								<Text style={styles.label}>Start Date:{'   '} </Text>
								{dayjs(plans.startDate).format('YYYY-MM-DD')}
								<Text style={styles.label}>
									{'   '}End Date:{'   '}
								</Text>
								{dayjs(plans.endDate).format('YYYY-MM-DD')}
							</Text>
							<Text style={styles.comment}>{plans.comment}</Text>
						</View>
					))}
				</View>
			</Page>
		</Document>
	);
};

export default PdfDocument;
