import { Layout } from '../layout/Layout';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Layout>
      <Hero />
      <VerticalFeatures />
    </Layout>
  </div>
);

export { Base };
