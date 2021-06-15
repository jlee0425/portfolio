import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

interface NavProps {
	isBurger: boolean;
	hidden: boolean;
}

export const Navbar = ({ hidden, isBurger }: NavProps) => {
	return (
		<Container hidden={hidden} isBurger={isBurger}>
			<li>
				<Link href='#projects'>
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href='#tech'>
					<NavLink>Tech</NavLink>
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

const Container = styled.div<NavProps>`
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 100%;

	transform: ${({ hidden, isBurger }) =>
		!isBurger
			? `translateX(0)`
			: hidden
			? `translateX(120%)`
			: `translateX(-50%)`};
	transition: transform 0.5s ease-in-out;
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
