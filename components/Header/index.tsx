import React from 'react';
import styled from 'styled-components';
import { Icons } from './Icons';
import { Logo } from './Logo';
import { Navbar } from './Navbar';

const Header = () => {
	return (
		<Container>
			<Logo />
			<Navbar />
			<Icons />
		</Container>
	);
};

export default Header;

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 2rem;
	padding: 1rem;
	padding-top: 2rem;
`;