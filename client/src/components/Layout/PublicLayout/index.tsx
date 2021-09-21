import React from 'react';
import { PublicRouteWrapper } from './styled';
import { Grid } from '@material-ui/core';
import Logo from 'components/Logo';

type IProps = {
	error?: string;
};

const PublicLayout: React.FC<IProps> = ({ children, error }) => {
	return (
		<PublicRouteWrapper container justifyContent='center' alignItems='center'>
			<Grid item md={3} lg={3} sm={6} xs={12} xl={3}>
				<div className='auth-container'>
					<Logo />
					<p className='auth-container-error'>{error}</p>
					{children}
				</div>
			</Grid>
		</PublicRouteWrapper>
	);
};

export default PublicLayout;
