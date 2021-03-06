import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '@components/styledComponents';
import React from 'react';
import { TechList } from './TechList';

// TODO media small
const index = () => {
	return (
		<Section id="tech">
			<SectionDivider divider />
			<SectionTitle>Tech Stacks</SectionTitle>
			<SectionText>
				I have worked with a range of technologies in the web development world.
			</SectionText>
			<TechList />
		</Section>
	);
};

export default index;
