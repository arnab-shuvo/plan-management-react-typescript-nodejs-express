import { Grid } from '@material-ui/core';
import { color } from 'constant/color';
import styled from 'styled-components';

export const PrivateRouteWrapper = styled(Grid)`
	.body-content {
		min-height: 100vh;
		&-wrapper {
			min-height: 100vh;
			padding: 30px;
			-ms-overflow-style: none; /* IE and Edge */
			scrollbar-width: none; /* Firefox */
			&::-webkit-scrollbar {
				display: none;
			}
		}
	}
`;

export const MenuContainer = styled.div`
	width: 200px;
	padding: 30px 10px;
	ul {
		margin: 0;
		padding: 0;
		li {
			list-style: none;
			margin-bottom: 10px;
			.user {
				padding: 10px 20px;
				color: ${color.primaryColor};
			}
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
