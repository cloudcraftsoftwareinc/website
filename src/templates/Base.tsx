import { Layout } from '../layout/Layout';
import { Banner } from './Banner';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Layout>
      <Hero />
      <VerticalFeatures />
      <Banner />
    </Layout>
  </div>
);

export { Base };
