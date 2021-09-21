import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import { Grid } from '@material-ui/core';
import { color } from 'constant/color';

export const PlanModalWrapper = styled(Modal)`
	.modal-container {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		.modal-body {
			padding: 30px;
			background: #fff;
			width: 700px;
		}
	}
`;
export const ViewModalWrapper = styled(Grid)`
	.section {
		border: 1px solid #f1f1f1;
		padding-bottom: 30px !important;
	}
	.label {
		font-weight: 600;
		font-size: 13px;
		margin: 10px 0;
		text-transform: uppercase;
	}
	.destination {
		font-weight: 800;
		font-size: 16px;
	}
	.plan-by {
		font-weight: 800;
		font-size: 16px;
		color: ${color.primaryColor};
	}
	.date {
		font-weight: 600;
		font-size: 18px;
	}
	.comment {
		font-size: 14px;
	}
`;
