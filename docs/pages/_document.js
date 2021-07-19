import Document, { Html, Head, Main, NextScript } from 'next/document'

class NextraDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="/css/main.css" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="author" href="humans.txt" />
          <meta name="twitter:site" content="@designbylunar" />
          <meta name="twitter:creator" content="@designbylunar" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default NextraDocument
