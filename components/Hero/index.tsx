import React from 'react';
import styled from 'styled-components';
import Button from '@styles/Button';
import { Section, SectionText, SectionTitle } from '@styles/styledComponents';

const index = () => {
	return (
		<Section row nopadding>
			<Desc>
				<SectionTitle main>
					반갑습니다. <br />
					Hello.
				</SectionTitle>
				<SectionText>More texts.</SectionText>
				<Button
					onClick={() => {
						alert('Learn more');
					}}
				>
					Learn More.
				</Button>
			</Desc>
		</Section>
	);
};

export default index;

const Desc = styled.div`
	width: 100%;

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 80%;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	}
`;
