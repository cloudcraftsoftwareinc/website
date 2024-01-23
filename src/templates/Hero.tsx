import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        {/* <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li> */}
        <li>
          <Link href="/">Home</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Tailored Solutions in \n'}
            <span className="text-primary-500">
              Cloud Technology, AI Integration, and Organizational
              Transformation
            </span>
          </>
        }
        description="Leverage the power of AI, Automation, and the Cloud to transform your business."
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
