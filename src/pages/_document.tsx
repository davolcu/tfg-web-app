import Document, { Html, Head, Main, NextScript } from 'next/document';
/** Utils */
import { FallbackStyles, MagicScriptTag } from '@utils/InlineCssVariables';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <FallbackStyles />
          <MagicScriptTag />
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
