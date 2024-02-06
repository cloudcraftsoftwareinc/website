import { GoogleTagManager } from '@next/third-parties/google';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <GoogleTagManager gtmId="G-NV5LK0T9C1" />
      </Html>
    );
  }
}

export default MyDocument;
