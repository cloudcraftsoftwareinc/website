import Link from 'next/link';

import { Background } from '@/background/Background';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Background color="bg-primary-100">
    <Section>
      <CTABanner
        title="Save time and money, and grow your business"
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
  </Background>
);

export { Banner };
