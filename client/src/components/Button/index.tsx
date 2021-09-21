import React from 'react';
import { CustomButton } from './styled';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	buttonType?: 'primary' | 'ghost' | 'secondary' | 'icon-only';
	color?: 'danger' | 'default';
}

const Button: React.FC<IProps> = ({
	children,
	buttonType = 'primary',
	color = 'default',
	...rest
}) => {
	return (
		<CustomButton buttonType={buttonType} color={color} {...rest}>
			{children}
		</CustomButton>
	);
};

export default Button;
