import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

export const Logo = () => {
	return (
		<Container>
			<Link href='/'>
				<LogoContainer>
					<LogoImg src='./logo_white.png' />
				</LogoContainer>
			</Link>
		</Container>
	);
};

const Container = styled.div`
	grid-area: 1/1/2/2;
	display: flex;
	flex-direction: row;
	align-content: center;
	cursor: pointer;

	@media ${(props) => props.theme.breakpoints.sm} {
		grid-area: 1 / 1 / 2 / 3;
	}
`;

const LogoContainer = styled.a`
	display: flex;
	align-items: center;
	color: white;
`;

const LogoImg = styled.img`
	width: 150px;

	@media ${({ theme }) => theme.breakpoints.sm} {
		width: 100px;
	}
`;
