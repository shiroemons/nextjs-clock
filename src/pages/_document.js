import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#f9a8d4" />
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="apple-touch-icon" href="/icon-192x192.png" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument