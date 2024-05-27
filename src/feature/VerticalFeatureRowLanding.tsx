import className from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from '@/button/Button';
import { FeatureItem } from '@/components/feature-item';

type IVerticalFeatureRowLandingProps = {
  title: string;
  items: Array<string>;
  targetText?: string;
  target?: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  badge?: boolean;
};

const VerticalFeatureRowLanding = (props: IVerticalFeatureRowLandingProps) => {
  const verticalFeatureClass = className(
    'mt-16',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  const defaultTarget =
    'https://calendar.cloudcraft.software/introduction-appointment';
  const target = props.target || defaultTarget;
  const blank = target.startsWith('/') ? '_self' : '_blank';

  const defaultTargetText = 'Book an appointment';
  const targetText = props.targetText || defaultTargetText;

  return (
    <div className={verticalFeatureClass}>
      <div className={`w-full text-center sm:w-1/2 sm:px-6`}>
        <h3 className="mb-2 text-left text-3xl font-semibold  text-gray-900">
          {props.title}
        </h3>
        <ul className="my-4 mb-6 text-left">
          {props.items.map((item, i) => (
            <li key={i}>
              <FeatureItem text={item} />
            </li>
          ))}
        </ul>
        <Link target={blank} href={target}>
          <Button>{targetText}</Button>
        </Link>
      </div>

      <div className="w-full p-6 py-4 sm:w-1/2">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { VerticalFeatureRowLanding };
