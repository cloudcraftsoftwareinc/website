import className from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from '@/button/Button';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-900">{props.title}</h3>
        <div className="my-6 text-xl leading-9">{props.description}</div>
        <Link
          target="_blank"
          href="https://calendar.cloudcraft.software/introduction-appointment"
        >
          <Button>Book an intro with us</Button>
        </Link>
      </div>

      <div className="w-full p-6 sm:w-1/2">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
