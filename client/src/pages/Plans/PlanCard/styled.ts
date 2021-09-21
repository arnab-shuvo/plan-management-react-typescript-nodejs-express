import Card from '@material-ui/core/Card';
import { color } from 'constant/color';
import styled from 'styled-components';

export const PlanCardWrapper = styled(Card)`
	height: 100%;
	.title {
		color: #777;
		font-size: 18px;
		margin-top: 10px;
		margin-bottom: 10px;
		font-weight: 800;
	}
	.user-name {
		font-weight: 600;
		font-size: 14px;
		span {
			color: ${color.primaryColor};
			display: inline-block;
			margin-left: 10px;
		}
	}
	.date-wrapper {
		&.right {
			text-align: right;
		}
		p {
			font-weight: 800;
			font-size: 13px;
			&.date {
				font-weight: 600;
				font-size: 12px;
			}
		}
	}
	.day-left {
		font-size: 13px;
		font-weight: 600;
		span {
			font-size: 15px;
			font-weight: 800;
			color: ${color.primaryColor};
		}
	}
	.comments-title {
		font-weight: 800;
		font-size: 13px;
	}
	.comments {
		padding: 0 0 10px;
		font-size: 14px;
	}

	.tag-line {
		span {
			display: inline-block;
			padding: 5px 10px;
			color: #fff;
			font-size: 10px;
			&.incoming {
				background-color: ${color.primaryColor};
			}
			&.ongoing {
				background-color: #9a0000;
			}
		}
	}
`;
