import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Footer from '@components/Footer';
import Header from '@components/Header';

interface Props {
	children: ReactNode;
}

const index = ({ children }: Props) => {
	return (
		<Container>
			<Header />
			<main>{children}</main>
			<Footer />
		</Container>
	);
};

export default index;

const Container = styled.div`
	max-width: 1280px;
	width: 100%;
	margin: auto;
`;
