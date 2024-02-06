import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

import { AppConfig } from '../utils/AppConfig';

const gtmId = 'G-NV5LK0T9C1';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtmId}');
            `}
          </Script>
        </Head>
        <body className="testing">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
