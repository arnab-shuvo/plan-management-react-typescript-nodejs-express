import React, { useEffect } from 'react';
import { PrivateRouteWrapper, MenuContainer } from './styled';
import { useDispatch } from 'react-redux';
import { getMyInfo } from 'store/subStore/userStore/action';
import Grid from '@material-ui/core/Grid';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { getUserList } from 'store/subStore/userStore/action';
import Hidden from '@material-ui/core/Hidden';
import { Drawer } from '@material-ui/core';
import { useState } from 'react';
import MobileMenu from './mobile-menu';

const PrivateLayout: React.FC = ({ children }) => {
	const dispatch = useDispatch();
	const [openDrawer, setOpenDrawer] = useState<boolean>(false);
	useEffect(() => {
		dispatch(getMyInfo());
		dispatch(getUserList());
	}, [dispatch]);

	return (
		<PrivateRouteWrapper container direction='row' alignItems='stretch'>
			<Grid item xs={12}>
				<Header setOpenDrawer={setOpenDrawer} />
			</Grid>
			<Grid item xs={12}>
				<Grid className='body-content' container>
					<Hidden only={['xs', 'sm']}>
						<Grid item md={4} lg={3} xl={2}>
							<Sidebar />
						</Grid>
					</Hidden>
					<Hidden only={['md', 'lg', 'xl']}>
						<Grid item xs={12}>
							<Drawer
								anchor={'left'}
								open={openDrawer}
								onClose={() => setOpenDrawer(false)}>
								<MenuContainer>
									<MobileMenu />
								</MenuContainer>
							</Drawer>
						</Grid>
					</Hidden>
					<Grid className='body-content-wrapper' item xs={12} md={8} lg={9} xl={10}>
						{children}
					</Grid>
				</Grid>
			</Grid>
		</PrivateRouteWrapper>
	);
};

export default PrivateLayout;
