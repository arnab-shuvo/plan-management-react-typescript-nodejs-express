import Grid from '@material-ui/core/Grid';
import Logo from 'components/Logo';
import React from 'react';
import { HeaderWrapper } from './styled';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from 'store/subStore/authStore/action';
import { Hidden } from '@material-ui/core';
import Button from 'components/Button';
import MenuIcon from '@material-ui/icons/Menu';

type IProps = {
	setOpenDrawer: (T: boolean) => void;
};

const Header: React.FC<IProps> = ({ setOpenDrawer }) => {
	const { userInfo } = useSelector((state: any) => state.userReducer);
	const dispatch = useDispatch();
	const logout = () => {
		dispatch(logoutAction());
	};
	return (
		<HeaderWrapper container justifyContent='space-between' alignItems='center'>
			<Grid item md={6} lg={6} xl={6} xs={6} sm={6}>
				<Logo />
			</Grid>
			<Hidden only={['xs', 'sm']}>
				<Grid item md={6} lg={6} xl={6} xs={12} sm={6}>
					<ul>
						<li>
							<div>
								<AccountCircleIcon />
								<p>{userInfo?.email}</p>
							</div>
						</li>
						<li>
							<div onClick={logout}>
								<ExitToAppIcon />
								<p>Logout</p>
							</div>
						</li>
					</ul>
				</Grid>
			</Hidden>
			<Hidden only={['xl', 'lg', 'md']}>
				<Grid container justifyContent='flex-end' item md={6} lg={6} xl={6} xs={6} sm={6}>
					<Button onClick={() => setOpenDrawer(true)} buttonType='icon-only'>
						<MenuIcon />
					</Button>
				</Grid>
			</Hidden>
		</HeaderWrapper>
	);
};

export default Header;
