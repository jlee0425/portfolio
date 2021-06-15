import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import { Tech } from './Tech';

interface Props {
	list: Tech[];
}

export const TechSubList = ({ list }: Props) => {
	return (
		<Container>
			{list.map(({ name, logo, link }) => (
				<Tech name={name} logo={logo} link={link} key={name} />
			))}
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
