import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

export const Logo = () => {
	return (
		<Container>
			<Link href='/'>
				<LogoImg>
					<img src='./icon.png' width='50px' />
				</LogoImg>
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
`;

const LogoImg = styled.a`
	display: flex;
	align-items: center;
	color: white;
`;
