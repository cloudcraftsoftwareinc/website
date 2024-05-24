import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const typedWords = [
  'Small business',
  'Daycare',
  'Accounting firm',
  'Carwash',
  'Plumbers',
  'Law firm',
  'Electricians',
  'Credit Union',
  'Photographers',
  'Hair salon',
  'Contractors',
  'Small Business',
];

const Hero = () => (
  <Background
    color="bg-gray-100 bg-scroll bg-center"
    image="/assets/images/banner-bg.png"
  >
    <Section yPadding="pt-20 pb-20">
      <HeroOneButton
        title={<>{'We are your'}</>}
        typeLine={<Typewriter words={typedWords} />}
        description="Leveraging the power of Low-code, AI, Automation, and the Cloud to transform your business."
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
