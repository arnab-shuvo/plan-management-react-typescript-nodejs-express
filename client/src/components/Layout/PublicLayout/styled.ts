import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const PublicRouteWrapper = styled(Grid)`
	min-height: 100vh;
	background: #f1f1f1;
	background-attachment: fixed;
	.auth {
		&-container {
			background: #fff;
			padding: 30px;
			box-shadow: 0px 0px 8px 0px #e0e0e0;
			&-error {
				color: #9a0000;
				font-size: 15px;
				font-weight: 600;
				padding-top: 10px;
				min-height: 25px;
				text-align: center;
			}
		}
	}
	.error {
		color: #9a0000;
		font-size: 12px;
		font-weight: 600;
		padding: 5px 0;
		min-height: 25px;
	}
	.logo {
		padding-bottom: 10px;

		text-align: center;
	}
`;
