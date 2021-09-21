import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import { color } from 'constant/color';

export const PlanModalWrapper = styled(Modal)`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	.modal-body {
		padding: 30px;

		.input-box {
			padding: 0 0 30px 0px;
			.error {
				color: #9a0000;
				padding: 10px 0;
				font-weight: 600;
				font-size: 12px;
			}
		}
	}
	.modal-content {
		background: #fff;
		width: 700px;
		@media screen and (max-width: 1023px) {
			height: 70vh;
			width: 80%;
			overflow: scroll;
			.modal-body {
				width: 100%;
			}
		}
	}
	.modal-title {
		color: #fff;
		font-size: 18px;
		font-weight: 600;
		background: ${color.primaryColor};
		padding: 20px;
	}
	// @media screen and (min-width: 1024px) {
	// 	.modal-body {
	// 		width: 700px;
	// 		margin: auto;
	// 	}
	// }
`;
