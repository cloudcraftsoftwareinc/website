import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const typedWords = [
  'Small Business Automation',
  'Automated Campaigns',
  'Daycares',
  'Accountants',
  'Carwashes',
  'Plumbers',
  'Law firms',
  'Electricians',
  'Credit Unions',
  'Photographers',
  'Hair salons',
  'Contractors',
  'Effortless Business Management',
];

const Hero = () => (
  <Background
    color="bg-gray-100 bg-scroll bg-center border-t-8 border-t-primary-600"
    image="/assets/images/banner-bg.png"
  >
    <Section yPadding="pt-32 pb-32">
      <HeroOneButton
        title={<>{'Your technology partners for'}</>}
        typeLine={<Typewriter words={typedWords} />}
        button={
          <Link
            target="_blank"
            href="https://calendar.cloudcraft.software/introduction-appointment"
          >
            <Button xl>Book a free consultation</Button>
          </Link>
        }
        image="/assets/images/banner.webp"
      />
    </Section>
  </Background>
);

export { Hero };
