import { NextPage } from 'next';
import { Html, Head, Main, NextScript } from 'next/document';

const Document: NextPage = () => {
  return (
    <Html>
      <Head>
        <link key="manifest-json" rel="manifest" href="/manifest.webmanifest" />
        <link
          key="manifest-mask-icon"
          rel="mask-icon"
          href="/icon-192x192.png"
          color="#4b6fff"
        />

        <meta key="manifest-theme" name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
