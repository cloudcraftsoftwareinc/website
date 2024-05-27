import type { ReactNode } from 'react';

import { Header } from '@/templates/Header';

import { Banner } from '../templates/Banner';
import { Footer } from '../templates/Footer';
import { AppConfig } from '../utils/AppConfig';
import { Meta } from './Meta';

type ILayoutProps = {
  children: ReactNode;
};

const Layout = (props: ILayoutProps) => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    {props.children}
    <Banner />
    <Footer />
  </div>
);

export { Layout };
