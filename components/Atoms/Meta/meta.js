import Head from 'next/head';

const Meta = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Francisco Naranjo</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <style jsx global>
      {`
        body {
          margin: 0;
          padding: 0;
          max-width: 100%;
        }
        
        .* {
          box-sizing: border-box;
        }

        /* Founders Grotesk*/

        @font-face {
        font-family: 'Founders Grotesk Light';
        src: url('/fonts/FoundersGrotesk/FoundersGrotesk-Light.otf');
        font-weight: normal;
        font-style: normal;
        }
        @font-face {
        font-family: 'Founders Grotesk Regular';
        src: url('/fonts/FoundersGrotesk/FoundersGrotesk-Regular.otf');
        font-weight: normal;
        font-style: normal;
        }
        @font-face {
        font-family: 'Founders Grotesk Semibold';
        src: url('/fonts/FoundersGrotesk/FoundersGrotesk-Semibold.otf');
        font-weight: normal;
        font-style: normal;
        }
        @font-face {
        font-family: 'Founders Grotesk Light Italic';
        src: url('/fonts/FoundersGrotesk/FoundersGrotesk-LightItalic.otf');
        font-weight: normal;
        font-style: normal;
        }
        @font-face {
        font-family: 'Founders Grotesk Regular Italic';
        src: url('/fonts/FoundersGrotesk/FoundersGrotesk-RegularItalic.otf');
        font-weight: normal;
        font-style: normal;
        }
        @font-face {
        font-family: 'Founders Grotesk Semibold Italic';
        src: url('/fonts/FoundersGrotesk/FoundersGrotesk-SemiboldItalic.otf');
        font-weight: normal;
        font-style: normal;
        }

       

      `}
    </style>
  </>
);

export default Meta;
