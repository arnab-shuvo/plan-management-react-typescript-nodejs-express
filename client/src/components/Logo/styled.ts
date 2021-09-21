import { color } from 'constant/color';
import styled from 'styled-components';

export const LogoWrapper = styled.div`
	.logo {
		color: ${color.primaryColor};
		font-weight: 800;
		font-size: 25px;
		text-transform: uppercase;
		span {
			font-size: 40px;
		}
	}
`;
