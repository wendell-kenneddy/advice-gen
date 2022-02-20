import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class _Document extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <meta name="theme-color" content="#323a49" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body className="w-full h-screen bg-dark-grayish-blue grid place-items-center">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
