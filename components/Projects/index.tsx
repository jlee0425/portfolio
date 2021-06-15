import React from 'react';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '@styles/styledComponents';
import styled from 'styled-components';
import { ProjectCard } from './ProjectCard';
import projects from '@lib/projects.json';

const index = () => {
	return (
		<Section id='projects'>
			<SectionDivider divider />
			<SectionTitle>Projects</SectionTitle>
			<SectionText>
				I am a firm believer that you can learn the most from experiencing
				yourself. Below are the lists of personal projects I have done while
				studying web technologies.
			</SectionText>
			<GridContainer>
				{projects.map(({ title, thumbnail, to, tags, git, url }) => (
					<ProjectCard
						key={title}
						title={title}
						image={thumbnail}
						to={to}
						tags={tags}
						git={git}
						demo={url}
					/>
				))}
			</GridContainer>
		</Section>
	);
};

export default index;

const GridContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	padding: 3rem;
	place-items: center;
	column-gap: 2rem;
	row-gap: 3rem;

	@media ${({ theme }) => theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		padding-bottom: 0;
	}
`;
