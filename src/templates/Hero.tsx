import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Tailored Solutions in \n'}
            <span className="text-primary-500">
              Automation, AI Integration, and Organizational Transformation
            </span>
          </>
        }
        description="Leveraging the power of Low-code, AI, Automation, and the Cloud to transform your business."
        button={
          <Link target="_blank" href="https://m.me/201238836414988">
            <Button xl>Contact Us</Button>
          </Link>
        }
        image="/assets/images/banner.webp"
      />
    </Section>
  </Background>
);

export { Hero };
