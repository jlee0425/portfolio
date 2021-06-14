import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@styles/globalStyles';
import theme from '@styles/theme';
import Particles from '@components/Particles';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Particles />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
export default MyApp;
