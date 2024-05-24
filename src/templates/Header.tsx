import Link from 'next/link';
import type { ReactNode } from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

type IHeaderProps = {
  children?: ReactNode;
};

const Header = (props: IHeaderProps) => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/#anchor-services">Services</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    {props.children}
  </Background>
);

export { Header };
