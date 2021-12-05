import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Head from 'next/head';

interface Props {
	children: ReactNode;
}

const index = ({ children }: Props) => {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Jeongkyu's homepage" />
				<meta name="author" content="Jeongkyu Lee" />
				<meta name="author" content="JL" />
				<meta property="og:site_name" content="Jeongkyu Lee's Homepage" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/thumbnails/portfolio.png" />
				<link rel="icon" href="./logo.png" />
				<title>JLEE</title>
			</Head>
			<Container>
				<Header />
				<main>{children}</main>
				<Footer />
			</Container>
		</>
	);
};

export default index;

const Container = styled.div`
	max-width: 1280px;
	width: 100%;
	margin: auto;
	overflow: hidden;
`;
