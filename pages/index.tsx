import Hero from '@components/Hero';
import Projects from '@components/Projects';
import TechStacks from '@components/TechStacks';
import { Section } from '@styles/styledComponents';
import React from 'react';

export default function Home() {
	return (
		<>
			<Section grid>
				<Hero />
			</Section>
			<Projects />
			<TechStacks />
		</>
	);
}
