import Grid from '@material-ui/core/Grid';
import { color } from 'constant/color';
import styled from 'styled-components';

export const SidebarWrapper = styled(Grid)`
	padding: 20px;
	background-color: #fff;
	height: 100%;
	ul {
		margin: 0;
		padding: 0 30px;
		li {
			list-style: none;
			margin-bottom: 20px;
			a {
				display: flex;
				align-items: center;
				padding: 10px 20px;
				color: #444;
				text-decoration: none;
				transition: all 0.2s ease;
				&.active {
					background: ${color.primaryColor};
					color: #f1f1f1;
				}
				&:hover {
					background: ${color.primaryColor};
					color: #f1f1f1;
				}
				span {
					padding-left: 30px;
				}
			}
		}
	}
`;
