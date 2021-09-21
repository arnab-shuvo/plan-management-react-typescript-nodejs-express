import { color } from 'constant/color';
import styled from 'styled-components';

type IStyledProps = {
	buttonType: 'primary' | 'ghost' | 'secondary' | 'icon-only';
	color: 'danger' | 'default';
};

export const CustomButton = styled.button`
	border-radius: 4px;
	padding: ${(props: IStyledProps) => (props.buttonType === 'icon-only' ? 0 : '15px 20px')};
	border: 1px solid
		${(props: IStyledProps) =>
			props.buttonType === 'primary' || props.buttonType === 'secondary'
				? color.primaryColor
				: 'transparent'};
	background: ${(props: IStyledProps) =>
		props.buttonType === 'primary' ? color.primaryColor : 'transparent'};
	color: ${(props: IStyledProps) =>
		props.buttonType === 'primary'
			? '#fff'
			: props.buttonType === 'secondary'
			? color.primaryColor
			: props.color === 'danger'
			? 'red'
			: color.primaryColor};

	transition: all 0.5s ease;
	cursor: pointer;
	font-size: 18px;
	font-weight: ${(props: IStyledProps) => (props.buttonType === 'primary' ? '800' : 'normal')};
	&:hover {
		transform: scale(1.01);
		box-shadow: 0px 4px 4px 2px #cdcdcd;
	}
`;
