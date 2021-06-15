import React from 'react';
import styled from 'styled-components';
import {
	AiOutlineGithub,
	AiOutlineInstagram,
	AiOutlineLinkedin,
} from 'react-icons/ai';

export const Icons = () => {
	return (
		<Container>
			<Icon href='https://github.com/jlee0425'>
				<AiOutlineGithub />
			</Icon>
			<Icon href='https://www.linkedin.com/in/jakejlee/'>
				<AiOutlineLinkedin />
			</Icon>
			<Icon href='https://www.instagram.com/jake_jklee/'>
				<AiOutlineInstagram />
			</Icon>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;

	@media ${(props) => props.theme.breakpoints.sm} {
		align-items: center;
		grid-area: 1 / 4 / 2 / 6;
	}
`;

const Icon = styled.a`
	transition: 0.3s ease;
	color: white;
	border-radius: 50px;
	padding-right: 1rem;
	font-size: 2.5rem;

	&:hover {
		background-color: #212d45;
		transform: scale(1.2);
		cursor: pointer;
	}
`;
