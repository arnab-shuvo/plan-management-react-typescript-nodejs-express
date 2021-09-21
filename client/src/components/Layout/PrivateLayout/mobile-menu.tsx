import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExploreIcon from '@material-ui/icons/Explore';
import PeopleIcon from '@material-ui/icons/People';
import { NavLink, Link } from 'react-router-dom';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from 'store/subStore/authStore/action';

const MobileMenu: React.FC = () => {
	const userReducer = useSelector((state: any) => state.userReducer);
	const dispatch = useDispatch();
	const logout = () => {
		dispatch(logoutAction());
	};
	return (
		<ul>
			<li>
				<p className='user'>{userReducer.userInfo?.email}</p>
			</li>
			<li>
				<NavLink to='/dashboard'>
					<DashboardIcon />
					<span>Dashboard</span>
				</NavLink>
			</li>
			{userReducer.userInfo?.userRole !== 'manager' && (
				<li>
					<NavLink to='/plans'>
						<ExploreIcon />
						<span>Plans</span>
					</NavLink>
				</li>
			)}
			{userReducer.userInfo?.userRole !== 'user' && (
				<li>
					<NavLink to='/users'>
						<PeopleIcon />
						<span>Users</span>
					</NavLink>
				</li>
			)}

			<li>
				<Link to='/'>
					<AirplanemodeActiveIcon />
					<span>Destination</span>
				</Link>
			</li>
			<li>
				<Link to='/'>
					<UnfoldMoreIcon />
					<span>More Plans</span>
				</Link>
			</li>
			<li>
				<Link to='/'>
					<MenuBookIcon />
					<span>Guides</span>
				</Link>
			</li>
			<li>
				<Link to='/'>
					<ConfirmationNumberIcon />
					<span>Tickets</span>
				</Link>
			</li>
			<li>
				<Link to='/'>
					<RecordVoiceOverIcon />
					<span>Management</span>
				</Link>
			</li>
			<hr />
			<li>
				<a href='#logout' onClick={logout}>
					<RecordVoiceOverIcon />
					<span>Logout</span>
				</a>
			</li>
		</ul>
	);
};

export default MobileMenu;
