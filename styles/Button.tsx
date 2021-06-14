import React, { ReactNode } from 'react';
import { ButtonBack, ButtonFront, ButtonProps } from './styledComponents';

interface Props extends ButtonProps {
	onClick: () => void;
	children: ReactNode;
}

const Button = ({ alt, form, disabled, onClick, children }: Props) => {
	return (
		<ButtonBack alt={alt} form={form} disabled={disabled}>
			{children}
			<ButtonFront alt={alt} onClick={onClick} disabled={disabled}>
				{children}
			</ButtonFront>
		</ButtonBack>
	);
};

export default Button;
