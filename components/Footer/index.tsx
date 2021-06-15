import { Icons } from '@components/Footer/Icons';
import { Logo } from '@components/Header/Logo';
import { Section, SectionText } from '@styles/styledComponents';
import React from 'react';
import styled from 'styled-components';

const index = () => {
	return (
		<Section id='contact'>
			<Grid>
				<Logo />
				<div>
					<a href='mailto:jlee425kr@gmail.com' style={{ paddingLeft: '1rem' }}>
						<SectionText>jlee425kr@gmail.com</SectionText>
					</a>
					<Icons />
				</div>
			</Grid>
		</Section>
	);
};

export default index;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	place-items: center;

	@media ${({ theme }) => theme.breakpoints.sm} {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 2fr;
	}
`;
