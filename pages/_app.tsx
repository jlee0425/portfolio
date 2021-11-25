import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@styles/globalStyles';
import theme from '@styles/theme';
import React from 'react';
import Layout from 'Layout';
import dynamic from 'next/dynamic';

const Particles = dynamic(() => import('@components/Particles'));

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Particles />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}
export default MyApp;
