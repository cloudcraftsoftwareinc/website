import '../styles/global.css';

import { MDXProvider } from '@mdx-js/react';
import type { AppProps } from 'next/app';

import { GetStartedBlurb } from '../components/get-started-blurb';
import * as mdxComponents from '../components/mdx';
import { ServicesBlurb } from '../components/services-blurb';

const components = {
  ...mdxComponents,
  GetStartedBlurb,
  ServicesBlurb,
} as any;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MDXProvider components={components}>
    <Component {...pageProps} />
  </MDXProvider>
);

export default MyApp;
