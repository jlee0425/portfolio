import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface Props {
	children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
	return (
		<Container>
			<Header />
			<main>{children}</main>
			<Footer />
		</Container>
	);
};

const Container = styled.div`
	max-width: 1280px;
	width: 100%;
	margin: auto;
`;
