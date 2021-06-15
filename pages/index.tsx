import React from 'react';
import Hero from '@components/Hero';
import Head from 'next/head';
import Layout from '../Layout';
import { Section } from '@styles/styledComponents';
import Projects from '@components/Projects';
import TechStacks from '@components/TechStacks';

export default function Home() {
	return (
		<Layout>
			<Head>
				<link rel='icon' href='./logo.png' />
				<title>JLEE</title>
			</Head>
			<Section grid>
				<Hero />
			</Section>
			<Projects />
			<TechStacks />
		</Layout>
	);
}
