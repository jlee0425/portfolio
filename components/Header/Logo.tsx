import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

interface LogoProps {
	hidden?: boolean;
	lg?: boolean;
}

export const Logo = ({ hidden, lg }: LogoProps) => {
	return (
		<Container hidden={hidden}>
			<Link href='/' passHref>
				<LogoContainer>
					<LogoImg src='./logo_white.png' lg={lg} />
				</LogoContainer>
			</Link>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-content: center;
	cursor: pointer;
	height: 100%;

	transform: ${({ hidden }) => (hidden ? 'translate(-200%)' : 'translate(0)')};
	transition: transform 0.5s ease-in-out;
`;

const LogoContainer = styled.a`
	display: flex;
	align-items: center;
	color: white;
`;

const LogoImg = styled.img<LogoProps>`
	${({ lg }) => (lg ? `width: 250px;` : `width: 150px;`)};

	@media ${({ theme }) => theme.breakpoints.sm} {
		width: 100px;
	}
`;
