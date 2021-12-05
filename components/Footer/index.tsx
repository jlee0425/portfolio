import { Icons } from '@components/Footer/Icons';
import { Logo } from '@components/Header/Logo';
import {
	Section,
	SectionDivider,
	SectionText,
} from '@components/styledComponents';
import React from 'react';
import styled from 'styled-components';

const index = () => {
	return (
		<Section id="contact">
			<Logo lg />
			<Container>
				<SectionText>+82-10-6860-3966</SectionText>
				<a href="mailto:jlee425kr@gmail.com">
					<SectionText>jlee425kr@gmail.com</SectionText>
				</a>
				<SectionDivider style={{ margin: '2rem 0', width: '80px' }} />
				<Icons />
			</Container>
		</Section>
	);
};

export default index;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: fit-content;
	align-items: flex-start;
	padding-left: 1rem;
`;
