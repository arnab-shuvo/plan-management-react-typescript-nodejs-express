import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';

export const UserModalWrapper = styled(Modal)`
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
