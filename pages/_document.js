import Document, { Html, Main, NextScript, Head } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/FoundersGrotesk/FoundersGrotesk-Light.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/FoundersGrotesk/FoundersGrotesk-Regular.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/FoundersGrotesk/FoundersGrotesk-Semibold.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/FoundersGrotesk/FoundersGrotesk-LightItalic.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/FoundersGrotesk/FoundersGrotesk-RegularItalic.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/FoundersGrotesk/FoundersGrotesk-SemiboldItalic.otf"
            as="font"
            crossOrigin=""
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
