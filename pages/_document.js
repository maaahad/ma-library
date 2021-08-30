// Reference for JSS issue on NextJS fast refresh
// https://medium.com/wesionary-team/implementing-react-jss-on-next-js-projects-7ceaee985cad
// https://github.com/mui-org/material-ui/tree/next/examples/nextjs

import Document, { Html, Head, Main, NextScript } from "next/document";
import { SheetsRegistry, JssProvider, createGenerateId } from "react-jss";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const registry = new SheetsRegistry();
    const generateId = createGenerateId();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          (
            <JssProvider registry={registry} generateId={generateId}>
              <App {...props} />
            </JssProvider>
          ),
      });
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
        </>
      ),
    };
  }
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link rel="icon" href="/images/maaahad.jpg" />
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
