import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Sling as Hamburger } from 'hamburger-react';
import { Logo } from './Logo';
import { Navbar } from './Navbar';

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
						color='rgba(255, 255, 255, 0.5)'
						onToggle={toggle}
					/>
				</BurgerContainer>
			)}
			<Navbar isBurger={isBurger} hidden={!isOpen} />
		</Container>
	);
};

export default Header;

const useViewWidth = () => {
	const getViewportWidth = () =>
		Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	const [vw, setVW] = useState(0);
	useEffect(() => {
		const handleResize = () => setVW(getViewportWidth());
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return vw;
};

const Container = styled.div`
	top: 0;
	position: sticky;
	display: grid;
	grid-template-columns: 1fr 1.5fr;
	padding: 1rem;
	overflow: hidden;
	background: ${({ theme }) => theme.colors.background1};
	z-index: 100;

	@media ${({ theme }) => theme.breakpoints.sm} {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 3rem;
	}
`;

const BurgerContainer = styled.div`
	position: absolute;
	right: 3rem;
`;
