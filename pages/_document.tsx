import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { ServerStyleSheets } from '@material-ui/styles';

class MyDocument extends Document {
  public render(): JSX.Element {
    return (
      <Html>
        <Head />
        <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx: any): Promise<any> => {
  const sheets = new ServerStyleSheets();
  const { renderPage } = ctx;

  ctx.renderPage = (): any =>
    renderPage({
      enhanceApp: (App: any): any => (props: any): any => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        {sheets.getStyleElement()}
      </>
    ),
  };
};

export default MyDocument;
