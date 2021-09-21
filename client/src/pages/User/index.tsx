import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { UserContainer } from './styled';
import Button from 'components/Button';
import {
	clearCurrentUser,
	setCurrentUser,
	deleteUserAction,
} from 'store/subStore/userStore/action';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import UserModal from './UserModal';
import { toggleModal } from 'store/subStore/utilityStore/action';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const User: React.FC = () => {
	const dispatch = useDispatch();
	const { userList } = useSelector((state: any) => state.userReducer);
	const { openModal } = useSelector((state: any) => state.utilityReducer);
	const columns: string[] = ['', 'Email', 'First Name', 'Last Name', 'Role', 'Action'];

	const addNewUser = () => {
		dispatch(toggleModal(true));
	};
	const closeModal = () => {
		dispatch(toggleModal(false));
		dispatch(clearCurrentUser());
	};
	const editUser = (user: IUserList) => {
		dispatch(toggleModal(true));
		dispatch(setCurrentUser(user));
	};
	const deleteUser = (id: string) => {
		const confirmation = window.confirm('Are You sure that you want to delete this User?');
		if (confirmation === true) {
			setTimeout(() => {
				dispatch(deleteUserAction(id));
			}, 500);
		}
	};

	return (
		<UserContainer container>
			<Grid item xs={12}>
				<Grid container justifyContent='space-between' alignItems='center'>
					<Grid item xs={12} sm={6}>
						<h3 className='page-title'>Plans</h3>
					</Grid>
					<Grid container justifyContent='flex-end' item xs={12} sm={4}>
						<Button onClick={addNewUser}>Add New</Button>
					</Grid>
				</Grid>
			</Grid>
			<TableContainer component={Paper}>
				<Table aria-label='simple table'>
					<TableHead>
						<TableRow>
							{columns.map((col: string, index: number) => (
								<TableCell align='center' key={index}>
									{col}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{userList &&
							userList.map((user: IUserList, index: number) => (
								<TableRow key={user._id}>
									<TableCell align='center' component='th' scope='row'>
										{index + 1}
									</TableCell>
									<TableCell align='center' component='th' scope='row'>
										{user.email}
									</TableCell>
									<TableCell align='center'>{user.firstName ?? 'N/A'}</TableCell>
									<TableCell align='center'>{user.lastName ?? 'N/A'}</TableCell>
									<TableCell align='center'>{user.userRole}</TableCell>
									<TableCell align='center'>
										<Button
											buttonType='ghost'
											color='default'
											onClick={() => editUser(user)}>
											<EditIcon />
										</Button>
										<Button
											onClick={() => deleteUser(user._id)}
											buttonType='ghost'
											color='danger'>
											<DeleteIcon />
										</Button>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
			{openModal && <UserModal open={openModal} onClose={closeModal} />}
		</UserContainer>
	);
};

export default User;
