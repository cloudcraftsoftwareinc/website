import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="We can help transform your business"
      subtitle="Contact us to explore the possibilities with our no-obligation consultation."
      button={
        <Link
          target="_blank"
          href="https://calendar.cloudcraft.software/introduction-appointment"
        >
          <Button>Book a free consultation</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
