import Grid from '@material-ui/core/Grid';
import { color } from 'constant/color';
import styled from 'styled-components';

export const HeaderWrapper = styled(Grid)`
	align-items: center;
	padding: 20px;
	background-color: #fff;
	height: 100%;
	ul {
		margin: 0;
		padding: 0;
		text-align: right;
		li {
			display: inline-block;
			list-style: none;
			margin-left: 20px;
			div {
				color: ${color.primaryColor};
				font-weight: bold;
				display: flex;
				align-items: center;
				cursor: pointer;
				&:hover {
					opacity: 0.7;
				}
			}
		}
	}
`;
