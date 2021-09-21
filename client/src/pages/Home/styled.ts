import { Grid } from '@material-ui/core';
import { color } from 'constant/color';
import styled from 'styled-components';

export const HomeWrapper = styled(Grid)`
	p {
		text-align: center;
	}
	.welcome {
		text-align: center;
	}
	.welcome-text {
		font-size: 30px;
		font-weight: 600;
		margin-bottom: 20px;
		.logo {
			text-transform: uppercase;
			font-size: 30px;
			color: ${color.primaryColor};
			span {
				font-size: 35px;
			}
		}
	}
	.sub-text {
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 20px;
	}
`;
