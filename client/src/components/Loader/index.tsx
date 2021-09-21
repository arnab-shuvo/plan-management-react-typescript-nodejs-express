import { color } from 'constant/color';
import React from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';

const LoaderWrapper = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background: rgba(255, 255, 255, 0.5);
	z-index: 99999;
	display: flex;
	align-items: center;
`;
const Load = keyframes`
0% {
    transform: scale(1);
}
100% {
    transform: scale(8);
    opacity: 0;
}
`;
const Loading = styled.div`
	width: 30px;
	height: 30px;
	animation: ${Load} 1s infinite ease-out;
	margin: auto;
	border-radius: 50%;
	background-color: ${color.primaryColor};
`;

const Loader: React.FC = () => {
	const { loader } = useSelector((state: any) => state.utilityReducer);
	return (
		<>
			{loader ? (
				<LoaderWrapper>
					<Loading />
				</LoaderWrapper>
			) : (
				''
			)}
		</>
	);
};

export default Loader;
