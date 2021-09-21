import React from 'react';
import { Grid } from '@material-ui/core';
import { HomeWrapper } from './styled';
import Button from 'components/Button';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
	const history = useHistory();
	return (
		<HomeWrapper container justifyContent='center'>
			<Grid item sm={8}>
				<div className='welcome'>
					<p className='welcome-text'>
						Welcome to{' '}
						<span className='logo'>
							<span>P</span>lan<span>M</span>aker
						</span>
					</p>
					<p className='sub-text'>Let's start by creating a plan</p>
					<Button onClick={() => history.push('/plans')}>Go To Plans</Button>
				</div>
			</Grid>
		</HomeWrapper>
	);
};

export default Home;
