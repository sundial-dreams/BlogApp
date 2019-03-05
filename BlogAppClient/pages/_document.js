import Document, { Head, Main, NextScript } from "next/document";

export default class BlogDocument extends Document {
  static async getInitialProps (ctx) {
    return {
      ...await Document.getInitialProps(ctx)
    }
  }

  render () {
    return (
      <html>
      <Head>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
      </html>
    )
  }
}