import React from 'react';
import Hero from '@components/Hero';
import Layout from '../Layout';
import { Section } from '@styles/styledComponents';
import Projects from '@components/Projects';
import TechStacks from '@components/TechStacks';

export default function Home() {
	return (
		<Layout>
			<Section grid>
				<Hero />
			</Section>
			<Projects />
			<TechStacks />
		</Layout>
	);
}
