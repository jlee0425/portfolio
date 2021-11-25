import Link from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';

interface NavProps {
	isBurger: boolean;
	hidden: boolean;
}

export const Navbar = ({ hidden, isBurger }: NavProps) => {
	return (
		<Container hidden={hidden} isBurger={isBurger}>
			<li>
				<Link href="#projects" passHref>
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#tech" passHref>
					<NavLink>Tech</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#contact" passHref>
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
			? css`
				translateX(120%);
				opacity: 0;
			`
			: css`
				translateX(-30%); 
				opacity: 1;
			`};
	-webkit-transition: transform 0.3s ease-in-out, opacity 0.3s linear;
	-moz-transition: transform 0.3s ease-in-out, opacity 0.3s linear;
	-o-transition: transform 0.3s ease-in-out, opacity 0.3s linear;
	transition: transform 0.3s ease-in-out, opacity 0.3s linear;

	> li {
		margin-right: 2rem;
	}
`;
const NavLink = styled.a`
	font-size: 2rem;
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
