import { Background } from '../background/Background';
import { Section } from '../layout/Section';

type IHeroLandingProps = {
  title: string;
  subTitle: string;
  byline: string;
};

const HeroLanding = (props: IHeroLandingProps) => (
  <Background color="bg-gradient-to-b from-white to-gray-200 border-t-8 border-b-8 border-primary-700 border-b-primary-100">
    <Section yPadding="py-24">
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <h1 className="mx-8 mt-14 text-7xl font-bold text-primary-600">
            {props.title}
          </h1>
          <h2 className="mx-8 text-5xl font-bold text-slate-500">
            {props.subTitle}
          </h2>
          <p className="mx-20 mt-4 text-2xl">{props.byline}</p>
        </div>
        <div>
          <img src="/assets/images/boost-your-productivity.png" />
        </div>
      </div>
    </Section>
  </Background>
);

export { HeroLanding };
