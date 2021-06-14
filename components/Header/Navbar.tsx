import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

export const Navbar = () => {
	return (
		<Container>
			<li>
				<Link href='#projects'>
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href='#contact'>
					<NavLink>Contact</NavLink>
				</Link>
			</li>
		</Container>
	);
};

const Container = styled.div`
	grid-area: 1/2/2/4;
	display: flex;
	align-items: center;
	justify-content: space-around;

	@media ${(props) => props.theme.breakpoints.sm} {
		grid-area: 2 / 2 / 3 / 5;
	}
`;

const NavLink = styled.a`
	font-size: 2rem;
	line-height: 32px;
	color: rgba(255, 255, 255, 0.75);
	transition: 0.4s ease;
	&:hover {
		color: #fff;
		opacity: 1;
		cursor: pointer;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.5rem;
	}
`;
