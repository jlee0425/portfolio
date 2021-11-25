import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Sling as Hamburger } from 'hamburger-react';
import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { useViewWidth } from 'hooks/useViewWidth';

const Header = () => {
	const vw = useViewWidth();
	const [isBurger, setBurger] = useState(false);
	const [isOpen, setOpen] = useState(false);

	useEffect(() => {
		if (vw < 640) {
			setBurger(true);
		} else {
			setBurger(false);
		}
	}, [vw]);

	const toggle = () => setOpen(!isOpen);

	return (
		<Container>
			<Logo hidden={isOpen} />
			{isBurger && (
				<BurgerContainer>
					<Hamburger
						hideOutline
						duration={0.5}
						size={28}
						color="rgba(255, 255, 255, 0.5)"
						onToggle={toggle}
					/>
				</BurgerContainer>
			)}
			<Navbar isBurger={isBurger} hidden={!isOpen} />
		</Container>
	);
};

export default Header;

const Container = styled.div`
	top: 0;
	position: sticky;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 7rem;
	padding: 1rem 1.5rem;
	overflow: hidden;
	background: ${({ theme }) => theme.colors.background1};
	border-bottom: 1px solid ${({ theme }) => theme.colors.background2};
	z-index: 3;

	@media ${({ theme }) => theme.breakpoints.sm} {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
	}
`;

const BurgerContainer = styled.div`
	position: absolute;
	right: 3rem;
	@media ${({ theme }) => theme.breakpoints.sm} {
		right: 1rem;
	}
`;
