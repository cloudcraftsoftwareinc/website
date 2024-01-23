import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Empower Your Vision, Transform Your Business"
      subtitle="Start exploring the possibilities with our no-obligation consultation."
      button={
        <Link target="_blank" href="https://m.me/201238836414988">
          <Button>Start now</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
