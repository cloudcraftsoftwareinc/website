import '../styles/global.css';

import { MDXProvider } from '@mdx-js/react';
import type { AppProps } from 'next/app';
import Script from 'next/script';

import { GetStartedBlurb } from '../components/get-started-blurb';
import * as mdxComponents from '../components/mdx';
import { ServicesBlurb } from '../components/services-blurb';

const gtmId = 'G-NV5LK0T9C1';

const components = {
  ...mdxComponents,
  GetStartedBlurb,
  ServicesBlurb,
} as any;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MDXProvider components={components}>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`} />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${gtmId}');
      `}
    </Script>
    <Component {...pageProps} />
  </MDXProvider>
);

export default MyApp;
