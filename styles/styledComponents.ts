import styled from 'styled-components';

interface SectionProps {
	grid?: boolean;
	row?: boolean;
	nopadding?: boolean;
}

interface TitleProps {
	main?: boolean;
}

interface DividerProps {
	colorAlt?: boolean;
	divider?: boolean;
}

export const Section = styled.section<SectionProps>`
	display: ${({ grid }) => (grid ? 'grid' : 'flex')};
	flex-direction: ${({ row }) => (row ? 'row' : 'column')};
	padding: ${({ nopadding }) => (nopadding ? '0' : '2rem 3rem 0')};
	margin: 0 auto;
	max-width: 1040px;
	box-sizing: content-box;
	position: relative;
	overflow: hidden;
	grid-template-columns: 1fr 1fr;

	@media ${({ theme }) => theme.breakpoints.md} {
		padding: 24px 48px 0;
		flex-direction: column;
	}
	@media ${({ theme }) => theme.breakpoints.sm} {
		padding: ${({ nopadding }) => (nopadding ? '0' : '16px 16px 0')};
		width: calc(100vw - 32px);
		flex-direction: column;
	}
`;

export const SectionTitle = styled.h2<TitleProps>`
	font-weight: 800;
	font-size: ${({ main }) => (main ? '65px' : '56px')};
	line-height: ${({ main }) => (main ? '72px' : '56px')};
	width: max-content;
	max-width: 100%;
	background: linear-gradient(
		121.57deg,
		#ffffff 18.77%,
		rgba(255, 255, 255, 0.66) 60.15%
	);
	background-clip: border-box;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin-bottom: 16px;
	padding: ${({ main }) => (main ? '58px 0 16px' : '0')};

	@media ${({ theme }) => theme.breakpoints.md} {
		font-size: ${({ main }) => (main ? '56px' : '48px')};
		line-height: ${({ main }) => (main ? '56px' : '48px')};
		margin-bottom: 12px;
		padding: ${({ main }) => (main ? '40px 0 12px' : '0')};
	}
	@media ${({ theme }) => theme.breakpoints.sm} {
		font-size: 32px;
		line-height: 40px;
		font-size: ${({ main }) => (main ? '28px' : '32px')};
		line-height: ${({ main }) => (main ? '32px' : '40px')};
		margin-bottom: 8px;
		padding: ${({ main }) => (main ? '16px 0 8px' : '0')};
		max-width: 100%;
	}
`;

export const SectionText = styled.p`
	max-width: 800px;
	font-size: 24px;
	line-height: 40px;
	font-weight: 300;
	color: rgba(255, 255, 255, 0.5);
	@media ${({ theme }) => theme.breakpoints.md} {
		max-width: 670px;
		font-size: 20px;
		line-height: 32px;
	}
	@media ${({ theme }) => theme.breakpoints.sm} {
		font-size: 16px;
		line-height: 24px;
	}
`;

export const SectionDivider = styled.div<DividerProps>`
	width: 64px;
	height: 6px;
	border-radius: 10px;
	background-color: #fff;
	background: ${({ colorAlt }) =>
		colorAlt
			? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)'
			: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
	margin: ${({ divider }) => (divider ? '4rem 0' : '')};

	@media ${({ theme }) => theme.breakpoints.md} {
		width: 48px;
		height: 4px;
	}

	@media ${({ theme }) => theme.breakpoints.sm} {
		width: 32px;
		height: 2px;
	}
`;
