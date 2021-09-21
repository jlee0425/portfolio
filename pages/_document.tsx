import { ServerStyleSheet } from 'styled-components';
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document';
import { NextComponentType } from 'next';
import { AppInitialProps } from 'next/app';
class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App: NextComponentType) => (props: AppInitialProps) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
