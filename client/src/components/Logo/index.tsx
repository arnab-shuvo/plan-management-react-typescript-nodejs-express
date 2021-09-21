import React from 'react';
import { LogoWrapper } from './styled';

const Logo: React.FC = () => {
	return (
		<LogoWrapper>
			<p className='logo'>
				<span>P</span>lan<span>M</span>aker
			</p>
		</LogoWrapper>
	);
};

export default Logo;
