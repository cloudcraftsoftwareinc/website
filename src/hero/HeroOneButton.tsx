import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  typeLine: ReactNode;
  description?: string;
  button?: ReactNode;
  image?: string;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h2 className="whitespace-pre-line text-4xl font-bold uppercase leading-hero text-gray-200">
      {props.title}
    </h2>

    <h1 className="min-h-24 text-6xl font-bold text-primary-500">
      {props.typeLine}
    </h1>

    <h2 className="whitespace-pre-line text-4xl font-bold uppercase leading-hero text-gray-200">
      Technology partners
    </h2>

    <div className="mt-10">{props.button}</div>
  </header>
);

export { HeroOneButton };
