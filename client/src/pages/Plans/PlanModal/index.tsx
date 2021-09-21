import React from 'react';
import Modal from 'components/Modal';
import ViewModal from './view-modal';
import EditModal from './edit-create-modal';
import { useSelector } from 'react-redux';

type IProps = {
	open: boolean;
	onClose: () => void;
};

const PlanModal: React.FC<IProps> = ({ open, onClose }) => {
	const { edit, create, currentPlan } = useSelector((state: any) => state.planReducer);
	return (
		<Modal
			open={open}
			onClose={onClose}
			title={`${edit ? 'Edit Plan' : create ? 'Create Plan' : currentPlan.destination} `}>
			{edit || create ? <EditModal /> : <ViewModal />}
		</Modal>
	);
};

export default PlanModal;
