import React from 'react';
import styled from 'styled-components';

export interface Tech {
	name: string;
	logo: JSX.Element;
	link: string;
}

export const Tech = ({ name, logo, link }: Tech) => {
	return (
		<Container href={link}>
			{logo}
			<Title>{name}</Title>
		</Container>
	);
};

const Container = styled.a`
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: 0.3s ease;
	color: white;
	border-radius: 50px;
	padding: 8px;
	font-size: 2.5rem;

	&:hover {
		background-color: #193572;
		transform: scale(1.1);
		cursor: pointer;
	}
`;

const Title = styled.h4`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 28px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
		line-height: 22px;
	}
`;
