import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  typeLine: ReactNode;
  button?: ReactNode;
  image?: string;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h3 className="whitespace-pre-line text-4xl font-bold uppercase leading-hero text-gray-200">
      {props.title}
    </h3>

    <h2 className="min-h-32 text-7xl font-bold text-primary-500">
      {props.typeLine}
    </h2>

    <div className="mt-10">{props.button}</div>
  </header>
);

export { HeroOneButton };
