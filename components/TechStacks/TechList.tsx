import React from 'react';
import styled from 'styled-components';
import {
	SiTypescript,
	SiReact,
	SiNextDotJs,
	SiGatsby,
	SiNodeDotJs,
	SiFirebase,
	SiPrismic,
	SiGraphql,
} from 'react-icons/si';

import { TechSubList } from './TechSubList';

export const TechList = () => {
	return (
		<Container>
			<Title>Front End</Title>
			<TechSubList list={techStacks['front-end']} />
			<br />
			<Title>Back End</Title>
			<TechSubList list={techStacks['back-end']} />
			<br />
		</Container>
	);
};
const Container = styled.section`
	display: grid;
	place-items: center;
	row-gap: 1rem;
`;

const Title = styled.h1`
	font-weight: 700;
	font-size: 28px;
	line-height: 32px;
	letter-spacing: 0.02em;
	color: #ffffff;
	margin-bottom: 8px;
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 24px;
		line-height: 28px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 20px;
		line-height: 28px;
		letter-spacing: 0.02em;
		margin-bottom: 4px;
	}
`;
const techStacks = {
	'front-end': [
		{
			name: 'Typescript',
			logo: <SiTypescript size='3.5rem' />,
			link: 'https://www.typescriptlang.org/',
		},
		{
			name: 'React',
			logo: <SiReact size='3.5rem' />,
			link: 'https://reactjs.org/',
		},
		{
			name: 'React Native',
			logo: <SiReact size='3.5rem' />,
			link: 'https://reactnative.dev/',
		},
		{
			name: 'Next',
			logo: <SiNextDotJs size='3.5rem' />,
			link: 'https://nextjs.org/',
		},
		{
			name: 'Gatsby',
			logo: <SiGatsby size='3.5rem' />,
			link: 'https://www.gatsbyjs.com/',
		},
	],
	'back-end': [
		{
			name: 'Node.js',
			logo: <SiNodeDotJs size='3.5rem' />,
			link: 'https://nodejs.org/en/',
		},
		{
			name: 'Firebase',
			logo: <SiFirebase size='3.5rem' />,
			link: 'https://firebase.google.com/',
		},
		{
			name: 'Prismic',
			logo: <SiPrismic size='3.5rem' />,
			link: 'https://prismic.io/',
		},
		{
			name: 'Graphql',
			logo: <SiGraphql size='3.5rem' />,
			link: 'https://graphql.org/',
		},
	],
};
